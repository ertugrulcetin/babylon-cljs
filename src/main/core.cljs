(ns main.core
  (:require
    ["/vendor/havok" :as HavokPhysics]
    ["babylonjs" :refer [AbstractMesh HavokPlugin]]
    ["babylonjs-gui" :as GUI]
    [applied-science.js-interop :as j]
    [cljs.core.async :as a :refer [go <!]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [main.api :as api :refer [db v3 v2]])
  (:require-macros
    [main.macros :as m]))

(defn create-player []
  (let [player (api/capsule "player" :height 1)
        mat (j/assoc! (api/standard-mat "material"
                                        :diffuse-color (api/color 0.5)
                                        :emissive-color (api/color 0 0.58 0.86)))
        mass 50
        am (api/create-action-manager player)]
    #_(register-action am {:trigger :ActionManager/OnIntersectionEnterTrigger
                           :parameter {:mesh (j/get db :terrain)
                                       :usePreciseIntersection true}}
                       (fn []
                         (println "On ground!")))
    (m/assoc! player
              :checkCollisions true
              :material mat
              :position.y 8
              :occlusionType (j/get AbstractMesh :OCCLUSION_TYPE_STRICT)
              :occlusionQueryAlgorithmType (j/get AbstractMesh :OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE))
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
      (create-ground-from-hm "terrain"
                             :texture "img/heightMap.png"
                             :subdivisions 50
                             :width 100
                             :height 100
                             :max-height 10
                             :min-height 0
                             :on-ready (fn [terrain]
                                         (physics-agg terrain
                                                      :type :PhysicsShapeType/MESH
                                                      :mass 0
                                                      :motion-type :PhysicsMotionType/STATIC)
                                         (m/assoc! terrain
                                                   :material (j/assoc! (StandardMaterial. "groundMaterial")
                                                                       :diffuseTexture (texture "img/texture/checkerboard.png"
                                                                                                :u-scale 15
                                                                                                :v-scale 15)
                                                                       :specularColor (color 0.2))
                                                   :checkCollisions true
                                                   :position.y -2
                                                   :position.x -28
                                                   :receiveShadows true)
                                         (j/assoc! db :terrain terrain)
                                         (a/put! p terrain)))
      p))

(defn update-from-keyboard []
  (let [camera (j/get db :camera)
        forward (j/get (j/call camera :getForwardRay) :direction)
        forward (v3 (j/get forward :x) 0 (j/get forward :z))
        len (j/call forward :length)
        forward (v3 (/ (j/get forward :x) len) 0 (/ (j/get forward :z) len))
        x (j/get forward :x)
        z (j/get forward :z)
        player (j/get db :player)
        _ (when (api/key-pressed? :Space)
            (api/apply-impulse player (v3 0 100 0) (api/get-pos player)))
        ref (v3)
        _ (api/get-linear-velocity-to-ref player ref)
        speed 5
        dir-vec (v3 (* x speed) (j/get ref :y) (* z speed))]
    (when (api/key-pressed? :KeyW)
      (api/set-linear-velocity player dir-vec)
      #_(j/call-in db [:player :physicsBody :applyForce]
                   (v3 (* x speed) 0 (* z speed))
                   (j/call-in db [:player :getAbsolutePosition])
                   #_(j/call-in db [:player :physicsBody :getObjectCenterWorld])))))

(defn register-scene-event [scene]
  (let [action-manager (api/create-action-manager scene)
        f (fn [evt]
            (j/assoc-in! db [:input-map (m/get evt :sourceEvent :code)] (= (m/get evt :sourceEvent :type) "keydown")))]
    (api/register-action action-manager :ActionManager/OnKeyDownTrigger f)
    (api/register-action action-manager :ActionManager/OnKeyUpTrigger f)))

(defn create-gui []
  (let [advanced-texture (j/call-in GUI [:AdvancedDynamicTexture :CreateFullscreenUI] "UI")
        crosshair (GUI/Image. "crosshair" "img/texture/crosshair.png")]
    (j/assoc! crosshair
              :autoScale true
              :scaleX 0.3
              :scaleY 0.3)
    (j/call advanced-texture :addControl crosshair)))

(defn start-scene []
  (go
    (try
      (let [canvas (js/document.getElementById "renderCanvas")
            engine (api/create-engine canvas)
            scene (api/create-scene engine)
            hk (<p! (HavokPhysics))
            _ (enable-physic-engine hk scene)
            player (create-player)
            camera (api/create-arc-camera "camera"
                                          :canvas canvas
                                          :player player
                                          :pos (v3 150 50 50)
                                          :radius 8
                                          :target-screen-offset (v2 -0.5)
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
        (create-gui)
        (api/create-light)
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
