(ns main.core
  (:require
    ["/vendor/havok" :as HavokPhysics]
    ["babylonjs" :refer [HavokPlugin]]
    ["babylonjs-gui" :as GUI]
    [applied-science.js-interop :as j]
    [cljs.core.async :as a :refer [go <!]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [main.api :as api :refer [db v3 v2]]
    [main.rule-engine :as re :refer-macros [reg-rule reg-pred]]
    [odoyle.rules :as o])
  (:require-macros
    [main.macros :as m]))

(reg-rule
  ::camera
  {:what
   [[::camera ::camera camera]
    [::camera ::ray-cast-result ray-cast-result]
    [::camera ::zoom zoom]]})

(reg-rule
  ::mouse
  {:what
   [[::mouse ::x x]
    [::mouse ::y y]
    [::mouse ::pointer-locked? pointer-locked?]]})

(reg-rule
  ::zoom-camera-when-collision
  {:temp {:ray-cast-result (api/raycast-result)
          :increment 0.5}
   :what
   [[::time ::delta dt]
    [::camera ::camera camera {:then false}]
    [::camera ::zoom zoom {:then false}]
    [::player ::physics-body player {:then false}]]
   :then
   (let [{:keys [ray-cast-result increment]} temp
         player-pos (api/get-pos player)
         camera-pos (j/get camera :globalPosition)
         result (api/raycast-to-ref player-pos camera-pos ray-cast-result)
         hit? (j/get result :hasHit)
         radius (m/get camera :radius)]
     (cond
       hit?
       (j/update! camera :radius - increment)

       (and (not hit?) (< radius zoom))
       (let [_ (j/update! camera :radius + increment)
             _ (j/call camera :update)
             camera-pos (j/get camera :globalPosition)
             result (api/raycast-to-ref player-pos camera-pos ray-cast-result)
             hit? (j/get result :hasHit)]
         (when hit?
           (j/update! camera :radius - increment)
           (j/call camera :update)))))})

(reg-rule
  ::keys-pressed
  {:what [::keys-pressed ::keys-pressed keys-pressed]})

(reg-rule
  ::player
  {:what
   [[::time ::delta dt]
    [::player ::mesh player]
    [::player ::physics-body physics-body]
    [::player ::speed speed]]})

(reg-rule
  ::jump-player
  {:temp {:jump-vec (v3 0 500 0)}
   :what
   [[::keys-pressed ::keys-pressed keys-pressed]
    [::player ::physics-body player {:then false}]
    [::player ::ground? ground? {:then false}]]
   :when [(keys-pressed "Space")
          ground?]
   :then (let [{:keys [jump-vec]} temp
               player-pos (api/get-pos player)]
           (api/apply-impulse player jump-vec player-pos))})

(defn- get-forward-dir [camera forward-temp keys-pressed]
  (let [forward (cond-> 0
                  (keys-pressed "KeyW") inc
                  (keys-pressed "KeyS") dec)
        forward-dir (j/call camera :getDirection api/v3-forward)]
    (api/set-v3 forward-temp (* forward (j/get forward-dir :x)) 0 (* forward (j/get forward-dir :z)))))

(defn- get-right-dir [camera right-temp keys-pressed]
  (let [right (cond-> 0
                (keys-pressed "KeyD") inc
                (keys-pressed "KeyA") dec)
        right-dir (j/call camera :getDirection api/v3-right)]
    (api/set-v3 right-temp (* right (j/get right-dir :x)) 0 (* right (j/get right-dir :z)))))

(reg-rule
  ::move-player
  {:temp {:forward-temp (v3)
          :right-temp (v3)
          :result-temp (v3)
          :speed-temp (v3)
          :v-ref (v3)}
   :what
   [[::time ::delta dt]
    [::player ::physics-body player {:then false}]
    [::player ::mesh player-model {:then false}]
    [::player ::speed speed {:then false}]
    [::camera ::camera camera {:then false}]
    [::keys-pressed ::keys-pressed keys-pressed {:then false}]]
   :when
   (or (keys-pressed "KeyW") (keys-pressed "KeyA") (keys-pressed "KeyS") (keys-pressed "KeyD"))
   :then
   (let [{:keys [forward-temp right-temp result-temp speed-temp v-ref]} temp
         _ (api/get-linear-velocity-to-ref player v-ref)
         forward-dir (get-forward-dir camera forward-temp keys-pressed)
         right-dir (get-right-dir camera right-temp keys-pressed)
         x (+ (j/get forward-dir :x) (j/get right-dir :x))
         z (+ (j/get forward-dir :z) (j/get right-dir :z))
         result (api/normalize (api/set-v3 result-temp x 0 z))
         yaw (js/Math.atan2 (j/get result :x) (j/get result :z))
         offset (* 2 js/Math.PI)]
     (m/assoc! player-model
               :rotation.y (+ yaw offset)
               :rotation.x offset)
     (api/set-linear-velocity player (api/set-v3 speed-temp
                                                 (* speed (m/get result :x))
                                                 (j/get v-ref :y)
                                                 (* speed (m/get result :z)))))})

(reg-rule
  ::speed-up-player
  {:temp {:fast-speed 10}
   :what [[::player ::speed speed {:then false}]
          [::keys-pressed ::keys-pressed keys-pressed]]
   :when
   (some? (keys-pressed "ShiftLeft"))
   :then
   (let [{:keys [fast-speed]} temp]
     (cond
       (and (not= fast-speed speed) (keys-pressed "ShiftLeft"))
       (o/insert! ::player ::speed 10)

       (and (= fast-speed speed) (not (keys-pressed "ShiftLeft")))
       (o/insert! ::player ::speed 5)))})

(reg-rule
  ::when-player-off-the-ground
  {:temp {:on-ground-states #{"COLLISION_STARTED" "COLLISION_CONTINUED"}
          :threshold 200}
   :what [[::time ::delta dt]
          [::player ::terrain-collision-state terrain-collision-state {:then false}]
          [::player ::last-terrain-collision-state last-terrain-collision-state {:then false}]]
   :then (let [{:keys [on-ground-states threshold]} temp
               on-ground? (on-ground-states terrain-collision-state)]
           (if (and (not on-ground?)
                    (> (- (js/Date.now) last-terrain-collision-state) threshold))
             (o/insert! ::player ::ground? false)
             (o/insert! ::player ::ground? true)))})

(defn upsert
  ([session [id attr f]]
   (upsert session id attr f))
  ([session id attr->value]
   (reduce-kv (fn [session attr f]
                (upsert session id attr f))
              session attr->value))
  ([session id attr f]
   (let [attr* (-> attr name keyword)
         value (f (-> (o/query-all session id) first attr*))]
     (->> (#'o/get-alpha-nodes-for-fact session (:alpha-node session) id attr value true)
          (#'o/upsert-fact session id attr value)))))

(defn- create-light []
  (let [light (api/directional-light "light"
                                     :dir (v3 -1 -2 -1)
                                     :pos (v3 20 40 20))
        shadow-generator (api/shadow-generator :light light)]
    (j/assoc! db :shadow-generator shadow-generator)))

(defn- set-pointer-down [scene canvas]
  (j/assoc! scene :onPointerDown
            (fn []
              (let [request-pointer-lock (or (j/get canvas :requestPointerLock)
                                             (j/get canvas :msRequestPointerLock)
                                             (j/get canvas :mozRequestPointerLock)
                                             (j/get canvas :webkitRequestPointerLock))]
                (when request-pointer-lock
                  (-> (j/call canvas :requestPointerLock)
                      (.then #(j/assoc! db :pointer-locked? true))
                      (.catch #(j/assoc! db :pointer-locked? false))))))))

(defn- enable-physic-engine [hk scene]
  (let [hk (HavokPlugin. true hk)
        gravity (v3 0 -9.8 0)]
    (j/call scene :enablePhysics gravity hk)
    (j/assoc! scene :collisionsEnabled true)))

(defn- create-terrain []
  (let [p (a/promise-chan)]
    (api/create-ground-from-hm "terrain"
                               :texture "img/heightMap.png"
                               :subdivisions 50
                               :width 100
                               :height 100
                               :max-height 10
                               :min-height 0
                               :on-ready #(a/put! p %))
    p))

(defn- create-terrain-physics [terrain]
  (api/physics-agg terrain
                   :type :PhysicsShapeType/MESH
                   :mass 0
                   :motion-type :PhysicsMotionType/STATIC)
  (m/assoc! terrain
            :material (api/standard-mat "groundMaterial"
                                        :diffuse-texture (api/texture "img/texture/checkerboard.png"
                                                                      :u-scale 15
                                                                      :v-scale 15)
                                        :specular-color (api/color 0.2))
            :checkCollisions true
            :position.y -2
            :position.x -28
            :receiveShadows true))

(defn- create-player-physics [player mass]
  (api/physics-agg player
                   :type :PhysicsShapeType/CAPSULE
                   :mass mass
                   :restitution 0.0
                   :friction 1.0
                   :linear-damping 2.2
                   :angular-damping 0
                   :gravity-factor 1.5
                   :motion-type :PhysicsMotionType/DYNAMIC
                   :mass-props {:inertia (v3)
                                :mass mass})
  (j/call-in player [:physicsBody :setCollisionCallbackEnabled] true)
  (-> player
      (j/call-in [:physicsBody :getCollisionObservable])
      (j/call :add (fn [event]
                     (let [type (m/get event :type)
                           collided-name (m/get event :collidedAgainst :transformNode :name)]
                       (when (= "terrain" collided-name)
                         (swap! re/*session
                                (fn [session]
                                  (-> session
                                      (o/insert ::player {::terrain-collision-state type
                                                          ::last-terrain-collision-state (js/Date.now)})))))))))
  (-> player
      (j/call-in [:physicsBody :getCollisionEndedObservable])
      (j/call :add (fn [event]
                     (let [type (m/get event :type)
                           collided-name (m/get event :collidedAgainst :transformNode :name)]
                       (when (= "terrain" collided-name)
                         (swap! re/*session
                                (fn [session]
                                  (-> session
                                      (o/insert ::player {::terrain-collision-state type
                                                          ::last-terrain-collision-state (js/Date.now)}))))))))))

(defn create-player []
  (let [player (api/capsule "player" :height 2 :radius 0.3)
        mat (api/standard-mat "material"
                              :diffuse-color (api/color 0.5)
                              :emissive-color (api/color 0 0.58 0.86))
        mass 50]
    (api/import-mesh "character.glb" (fn [new-meshes _ _ anim-groups]
                                       (let [mesh (first new-meshes)
                                             idle-anim (j/call-in db [:scene :getAnimationGroupByName] "idle")]
                                         (j/call idle-anim
                                                 :start true
                                                 1.0
                                                 (j/get idle-anim :from)
                                                 (j/get idle-anim :to)
                                                 false)
                                         (j/assoc! db :player-mesh mesh
                                                   :player-anims anim-groups)
                                         (m/assoc! mesh
                                                   :position.y 7.0
                                                   :rotationQuaternion nil)
                                         (j/call player :addChild mesh)
                                         (swap! re/*session
                                                (fn [session]
                                                  (-> session
                                                      (o/insert ::player {::mesh mesh
                                                                          ::physics-body player})
                                                      o/fire-rules)))
                                         (api/add-shadow-caster (j/get db :shadow-generator) mesh))))
    (m/assoc! player
              :checkCollisions true
              :material mat
              :visibility 0.2
              :position.y 8)
    (j/assoc! db :player player)
    (create-player-physics player mass)
    player))

(defn register-scene-event [scene]
  (let [action-manager (api/create-action-manager scene)
        e (volatile! nil)
        kp (fn [keys-pressed]
             (assoc keys-pressed (m/get @e :sourceEvent :code) (= (m/get @e :sourceEvent :type) "keydown")))
        ss (fn [session]
             (-> session
                 (upsert ::keys-pressed ::keys-pressed kp)
                 o/fire-rules))
        f (fn [evt]
            (vreset! e evt)
            (swap! re/*session ss))]
    (api/register-action action-manager :ActionManager/OnKeyDownTrigger f)
    (api/register-action action-manager :ActionManager/OnKeyUpTrigger f)))

(defn create-crosshair-&-debug-button []
  (let [advanced-texture (api/advanced-dynamic-texture)
        crosshair (api/gui-image "crosshair" "img/texture/crosshair.png")
        button (api/gui-button "but" "Debug")]
    (j/assoc! crosshair
              :autoScale true
              :scaleX 0.3
              :scaleY 0.3)
    (j/assoc! button
              :width 0.1
              :height "40px"
              :color "white"
              :background "green"
              :paddingTop "10px"
              :verticalAlignment (j/get-in GUI [:Control :VERTICAL_ALIGNMENT_TOP]))
    (j/call-in button [:onPointerClickObservable :add]
               (fn []
                 (if (j/call-in db [:scene :debugLayer :isVisible])
                   (j/call-in db [:scene :debugLayer :hide])
                   (j/call-in db [:scene :debugLayer :show]))))
    (api/add-control advanced-texture crosshair)
    (api/add-control advanced-texture button)))

(defn start-scene []
  (go
    (try
      (let [canvas (js/document.getElementById "renderCanvas")
            engine (api/create-engine canvas)
            scene (api/create-scene engine)
            _ (create-light)
            hk (<p! (HavokPhysics))
            _ (enable-physic-engine hk scene)
            terrain (<! (create-terrain))
            _ (create-terrain-physics terrain)
            player (create-player)
            camera (api/create-arc-camera "camera"
                                          :canvas canvas
                                          :player player
                                          :pos (v3 150 50 50)
                                          :radius 8
                                          :target-screen-offset (v2 -0.6)
                                          :use-bouncing-behavior? false
                                          :apply-gravity? true
                                          :collision-radius (v3 1)
                                          :lower-radius-limit 2
                                          :upper-radius-limit 15)
            ff (fn [session]
                 (-> session
                     (o/insert ::time ::delta (api/get-delta-time))
                     o/fire-rules))]
        (swap! re/*session
               (fn [session]
                 (-> session
                     (o/insert ::player {::forward 0
                                         ::right 0
                                         ::speed 5})
                     (o/insert ::camera {::camera camera
                                         ::zoom 8})
                     (o/insert ::keys-pressed ::keys-pressed {})
                     o/fire-rules)))
        (set-pointer-down scene canvas)
        (api/create-sky-box)
        (register-scene-event scene)
        (api/register-on-before-render #(swap! re/*session ff))
        (create-crosshair-&-debug-button)
        (j/call engine :runRenderLoop #(j/call scene :render))
        (api/register-event-listener js/window "resize" #(j/call engine :resize))
        (api/register-event-listener js/document "pointerlockchange"
                                     (fn []
                                       (j/assoc! db :pointer-locked? (boolean (j/get js/document :pointerLockElement)))))
        (api/register-event-listener js/document "mousemove"
                                     (fn [e]
                                       (swap! re/*session
                                              (fn [session]
                                                (-> session
                                                    (o/insert ::mouse {::x (j/get e :clientX)
                                                                       ::y (j/get e :clientY)})
                                                    o/fire-rules))))))
      (catch js/Error e
        (js/console.error e)))))

(defn remove-element-listeners []
  (doseq [[element type f] (m/get db :event-listeners)]
    (j/call element :removeEventListener type f))
  (j/assoc! db :event-listeners [])
  (println "removed event listeners"))

(defn ^:dev/before-load stop []
  (js/console.clear)
  (js/console.log "before-load")
  (remove-element-listeners)
  (j/call-in db [:engine :dispose])
  (re/reset-session))

(defn ^:dev/after-load start []
  (js/console.log "after-load")
  (start-scene))

(defn init []
  (js/console.log "init")
  (start))
