(ns main.core
  (:require
    ["/vendor/havok" :as HavokPhysics]
    ["babylonjs" :refer [HavokPlugin]]
    ["babylonjs-gui" :as GUI]
    [applied-science.js-interop :as j]
    [cljs.core.async :as a :refer [go <!]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [main.api :as api :refer [db v3 v2]])
  (:require-macros
    [main.macros :as m]))

(defn- create-light []
  (let [light (api/directional-light "light"
                                     :dir (v3 -1 -2 -1)
                                     :pos (v3 20 40 20))
        shadow-generator (api/shadow-generator :light light)]
    (j/assoc! db :shadow-generator shadow-generator)))

(defn- add-shadow-caster [mesh]
  (api/add-shadow-caster (j/get db :shadow-generator) mesh))

(defn create-player []
  (let [player (api/capsule "player" :height 2 :radius 0.3)
        mat (api/standard-mat "material"
                              :diffuse-color (api/color 0.5)
                              :emissive-color (api/color 0 0.58 0.86))
        mass 50
        ;; am (api/create-action-manager player)
        ]
    #_(register-action am {:trigger :ActionManager/OnIntersectionEnterTrigger
                           :parameter {:mesh (j/get db :terrain)
                                       :usePreciseIntersection true}}
                       (fn []
                         (println "On ground!")))
    (api/import-mesh "bot3.glb" (fn [new-meshes _ _ anim-groups]
                                  (let [mesh (first new-meshes)
                                        idle-anim (j/call-in db [:scene :getAnimationGroupByName] "idle")]
                                    #_(j/call-in mesh [:scaling :scaleInPlace] 0.1)
                                    (j/call idle-anim :start true 1.0 (j/get idle-anim :from) (j/get idle-anim :to) false)
                                    (j/assoc-in! mesh [:position :y] 7.0)
                                    (j/call player :addChild mesh)
                                    (add-shadow-caster mesh)
                                    (j/assoc! db :player))))
    (m/assoc! player
              :checkCollisions true
              :material mat
              :visibility 0.2
              :position.y 8)
    (j/assoc! db :player player)
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
    player))

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

(defn create-terrain []
  (let [p (a/promise-chan)
        ground (api/create-ground "ground"
                                  :width 100
                                  :height 100)]
    (api/physics-agg ground
                     :type :PhysicsShapeType/BOX
                     :friction 0.5
                     :mass 0)
    (m/assoc! ground :material (api/standard-mat "groundMaterial"
                                                 :diffuse-texture (api/texture "img/texture/checkerboard.png"
                                                                               :u-scale 15
                                                                               :v-scale 15)
                                                 :specular-color (api/color 0.2))
              :checkCollisions true
              :position.y -2
              :position.x -28
              :receiveShadows true)
    (j/assoc! db :terrain ground)
    (a/put! p ground)
    p)
  #_(let [p (a/promise-chan)]
      (api/create-ground-from-hm "terrain"
                                 :texture "img/heightMap.png"
                                 :subdivisions 50
                                 :width 100
                                 :height 100
                                 :max-height 10
                                 :min-height 0
                                 :on-ready (fn [terrain]
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
                                                       :receiveShadows true)
                                             (j/assoc! db :terrain terrain)
                                             (a/put! p terrain)))
      p))

(defn update-from-keyboard []
  (let [camera (j/get db :camera)
        player (j/get db :player)
        _ (when (api/key-pressed? :Space)
            (api/apply-impulse player (v3 0 100 0) (api/get-pos player)))
        ref (v3)
        _ (api/get-linear-velocity-to-ref player ref)
        speed 5
        right (atom 0)
        forward (atom 0)]
    (when (api/key-pressed? :KeyW) (swap! forward inc))
    (when (api/key-pressed? :KeyS) (swap! forward dec))
    (when (api/key-pressed? :KeyA) (swap! right dec))
    (when (api/key-pressed? :KeyD) (swap! right inc))
    (let [forward-dir (j/call camera :getDirection api/v3-forward)
          forward-dir (v3 (* @forward (j/get forward-dir :x)) 0 (* @forward (j/get forward-dir :z)))
          right-dir (j/call camera :getDirection api/v3-right)
          right-dir (v3 (* @right (j/get right-dir :x)) 0 (* @right (j/get right-dir :z)))
          x (+ (j/get forward-dir :x) (j/get right-dir :x))
          z (+ (j/get forward-dir :z) (j/get right-dir :z))
          {:keys [x z]} (j/lookup (api/normalize (v3 x 0 z)))]
      (api/set-linear-velocity player (v3 (* speed x) (j/get ref :y) (* speed z))))))

(defn register-scene-event [scene]
  (let [action-manager (api/create-action-manager scene)
        f (fn [evt]
            (j/assoc-in! db [:input-map (m/get evt :sourceEvent :code)] (= (m/get evt :sourceEvent :type) "keydown")))]
    (api/register-action action-manager :ActionManager/OnKeyDownTrigger f)
    (api/register-action action-manager :ActionManager/OnKeyUpTrigger f)))

(defn create-crosshair []
  (let [advanced-texture (api/advanced-dynamic-texture)
        crosshair (api/gui-image "crosshair" "img/texture/crosshair.png")]
    (j/assoc! crosshair
              :autoScale true
              :scaleX 0.3
              :scaleY 0.3)
    (api/add-control advanced-texture crosshair)))

(defn start-scene []
  (go
    (try
      (let [canvas (js/document.getElementById "renderCanvas")
            engine (api/create-engine canvas)
            scene (api/create-scene engine)
            _ (create-light)
            hk (<p! (HavokPhysics))
            _ (enable-physic-engine hk scene)
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
            _ (<! (create-terrain))]
        (set-pointer-down scene canvas)
        (api/create-sky-box)
        (register-scene-event scene)
        (api/register-on-before-render (fn []
                                         (update-from-keyboard)
                                         (let [player-pos (api/get-pos player)
                                               camera-pos (j/get camera :globalPosition)
                                               result (api/raycast-to-ref player-pos camera-pos (api/raycast-result))]
                                           (when (j/get result :hasHit)
                                             (j/update! camera :radius - 0.5)))))
        (create-crosshair)
        (j/call engine :runRenderLoop #(j/call scene :render))
        (api/register-event-listener js/window "resize" #(j/call engine :resize))
        (api/register-event-listener js/document "pointerlockchange"
                                     (fn []
                                       (j/assoc! db :pointer-locked? (boolean (j/get js/document :pointerLockElement))))))
      (catch js/Error e
        (js/console.error e)))))

(defn remove-element-listeners []
  (doseq [[element type f] (m/get db :event-listeners)]
    (j/call element :removeEventListener type f))
  (j/assoc! db :event-listeners [])
  (println "removed event listeners"))

(defn ^:dev/before-load stop []
  (js/console.clear)
  (js/console.log "stop")
  (remove-element-listeners)
  (j/call-in db [:engine :dispose]))

(defn ^:dev/after-load start []
  (js/console.log "start")
  (start-scene))

(defn init []
  (js/console.log "init")
  (start))

(comment
  (m/get db :camera :radius)
  (j/call (j/get db :player) :intersectsMesh (j/get db :terrain))
  (j/call-in db [:engine :getFps])
  (j/call-in db [:engine :getDeltaTime])
  (m/get db :scene :deltaTime)
  (j/call-in db [:scene :debugLayer :show])
  (j/call-in db [:player :physicsBody :applyForce] (v3 -50 0 0) (v3 0 0 0))
  )
