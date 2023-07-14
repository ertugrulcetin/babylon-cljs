(ns main.core
  (:require
    ["/vendor/havok" :as HavokPhysics]
    ["babylonjs" :refer [Scene
                         Engine
                         Color3
                         AbstractMesh
                         CubeTexture
                         DirectionalLight
                         DynamicTexture
                         ArcRotateCamera
                         HavokPlugin
                         MeshBuilder
                         StandardMaterial
                         Texture
                         PhysicsAggregate
                         PhysicsShapeType
                         PhysicsMotionType
                         PhysicsRaycastResult
                         ExecuteCodeAction
                         ShadowGenerator
                         Texture
                         ActionManager
                         Vector3]]
    [applied-science.js-interop :as j]
    [cljs.core.async :as a :refer [go <!]]
    [cljs.core.async.interop :refer-macros [<p!]])
  (:require-macros
    [main.macros :as m]))

(defonce db #js {})

(defn create-engine [canvas]
  (let [e (Engine. canvas true #js {:preserveDrawingBuffer true
                                    :stencil true})]
    (j/assoc! db :engine e :canvas canvas)
    e))

(defn create-scene [engine]
  (let [s (Scene. engine)]
    (j/assoc! db :scene s)
    s))

(defn v3
  ([]
   (v3 0))
  ([n]
   (Vector3. n n n))
  ([x y z]
   (Vector3. x y z)))

(defn color
  ([c]
   (color c c c))
  ([r g b]
   (Color3. r g b)))

(defn box [name & {:keys [size]}]
  (j/call MeshBuilder :CreateBox name #js {:size size}))

(defn capsule [name & {:keys [height radius]}]
  (j/call MeshBuilder :CreateCapsule name #js {:height height
                                               :radius radius}))

(defn get-pos [mesh]
  (j/call mesh :getAbsolutePosition))

(defn create-action-manager [obj]
  (let [am (ActionManager.)]
    (j/assoc! obj :actionManager am)
    am))

(defn register-action [action-manager params callback]
  (j/call action-manager :registerAction (ExecuteCodeAction.
                                           (if (keyword? params)
                                             (j/get ActionManager (name params))
                                             (clj->js (update params :trigger #(j/get ActionManager (name %)))))
                                           callback)))

(defn create-ground [name & {:keys [width height]}]
  (j/call MeshBuilder :CreateGround name #js {:width width
                                              :height height}))

(defn create-ground-from-hm [name & {:keys [texture subdivisions width height max-height min-height on-ready]}]
  (j/call MeshBuilder :CreateGroundFromHeightMap name texture #js {:subdivisions subdivisions
                                                                   :width width
                                                                   :height height
                                                                   :maxHeight max-height
                                                                   :minHeight min-height
                                                                   :onReady on-ready}))

(defn create-arc-camera [canvas player]
  (let [camera (ArcRotateCamera. "camera" 0 0 10 (v3))]
    (doto camera
      (j/call :setPosition (v3 50 50 50))
      (j/call :attachControl canvas true)
      (j/call :setTarget player))
    (j/assoc! camera
              :radius 8
              :defaultRadius 8
              ;; :checkCollisions true
              :useBouncingBehavior false
              :applyGravity true
              :collisionRadius (v3 1)
              :lowerRadiusLimit 2
              :upperRadiusLimit 15)
    (j/assoc! db :camera camera)
    camera))

(defn physics-agg [mesh & {:keys [type
                                  mass
                                  friction
                                  restitution
                                  motion-type
                                  mass-props
                                  linear-damping
                                  angular-damping
                                  gravity-factor]}]
  (let [agg (PhysicsAggregate. mesh (j/get PhysicsShapeType (name type)) #js {:mass mass
                                                                              :friction friction
                                                                              :restitution restitution})]
    (m/cond-self-> agg
      gravity-factor (j/call-in [:body :setGravityFactor] gravity-factor)
      linear-damping (j/call-in [:body :setLinearDamping] linear-damping)
      angular-damping (j/call-in [:body :setAngularDamping] angular-damping)
      mass-props (j/call-in [:body :setMassProperties] (clj->js mass-props))
      motion-type (j/call-in [:body :setMotionType] (j/get PhysicsMotionType (name motion-type))))))

(defn create-player []
  (let [player (capsule "player" :height 1)
        mat (j/assoc! (StandardMaterial. "material")
                      :diffuseColor (color 0.5)
                      :emissiveColor (color 0 0.58 0.86))
        mass 50
        am (create-action-manager player)]
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
    (physics-agg player
                 :type :PhysicsShapeType/CAPSULE
                 :mass mass
                 :restitution 0.0
                 :friction 1.0
                 :linear-damping 1.5
                 :angular-damping 0
                 ;; :gravity-factor 1.5
                 :motion-type :PhysicsMotionType/DYNAMIC
                 :mass-props {:inertia (v3)
                              :mass mass})
    player))

(defn set-pointer-down [scene canvas]
  (j/assoc! scene :onPointerDown
            (fn []
              (let [request-pointer-lock (or (j/get canvas :requestPointerLock)
                                             (j/get canvas :msRequestPointerLock)
                                             (j/get canvas :mozRequestPointerLock)
                                             (j/get canvas :webkitRequestPointerLock))]
                (when request-pointer-lock
                  (j/call canvas :requestPointerLock))))))

(defn create-sky-box []
  (let [skybox (box "skyBox" :size 5000.0)
        mat (StandardMaterial. "skyBox")]
    (m/assoc! mat :backFaceCulling false
              :reflectionTexture (CubeTexture. "//www.babylonjs.com/assets/skybox/TropicalSunnyDay")
              :reflectionTexture.coordinatesMode (j/get Texture :SKYBOX_MODE)
              :diffuseColor (color 0 0 0)
              :specularColor (color 0 0 0)
              :disableLighting true)
    (j/assoc! skybox :material mat)
    skybox))

(defn enable-physic-engine [hk scene]
  (let [hk (HavokPlugin. true hk)
        gravity (v3 0 -9.8 0)]
    (j/call scene :enablePhysics gravity hk)
    (j/assoc! scene :collisionsEnabled true)))

(defn create-checkerboard-texture []
  (let [ground-size 1024
        square-size 10
        square-count (/ ground-size square-size)
        texture (DynamicTexture. "checkerboard" #js {:width ground-size :height ground-size})
        texture-context (j/call texture :getContext)]
    (dotimes [i square-count]
      (dotimes [j square-count]
        (let [x (* i square-size)
              y (* j square-size)
              color (if (even? (+ i j)) "#808080" "#C0C0C0")]
          (j/assoc! texture-context :fillStyle color)
          (j/call texture-context :fillRect x y square-size square-size))))
    (j/call texture :update)
    texture))

(defn texture [path & {:keys [u-scale v-scale]}]
  (let [tex (Texture. path)]
    (m/cond-self-> tex
      u-scale (j/assoc! :uScale u-scale)
      v-scale (j/assoc! :vScale v-scale))))

(defn create-terrain []
  #_(let [p (a/promise-chan)
        ground (create-ground "ground"
                              :width 100
                              :height 100)]
    (physics-agg ground
                 :type :PhysicsShapeType/BOX
                 :friction 0.5
                 :mass 0)
    (m/assoc! ground :material (j/assoc! (StandardMaterial. "groundMaterial")
                                         :diffuseTexture (texture "img/texture/checkerboard.png"
                                                                  :u-scale 15
                                                                  :v-scale 15)
                                         :specularColor (color 0.2))
              :checkCollisions true
              :position.y -2
              :position.x -28
              :receiveShadows true)
    (j/assoc! db :terrain ground)
    (a/put! p ground)
    p)
  (let [p (a/promise-chan)]
    (create-ground-from-hm "terrain"
                           :texture "img/heightMap.png"
                           :subdivisions 10
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

(defn key-pressed? [key]
  (j/get-in db [:input-map key] false))

(defn apply-force [mesh force location]
  (j/call-in mesh [:physicsBody :applyForce] force location))

(defn apply-impulse [mesh impulse location]
  (j/call-in mesh [:physicsBody :applyImpulse] impulse location))

(defn get-linear-velocity-to-ref [mesh ref]
  (j/call-in mesh [:physicsBody :getLinearVelocityToRef] ref))

(defn set-linear-velocity [mesh dir]
  (j/call-in mesh [:physicsBody :setLinearVelocity] dir))

(defn get-object-center-world [mesh]
  (j/call-in mesh [:physicsBody :getObjectCenterWorld]))

(defn update-from-keyboard []
  (let [camera (j/get db :camera)
        forward (j/get (j/call camera :getForwardRay) :direction)
        forward (v3 (j/get forward :x) 0 (j/get forward :z))
        len (j/call forward :length)
        forward (v3 (/ (j/get forward :x) len) 0 (/ (j/get forward :z) len))
        x (j/get forward :x)
        z (j/get forward :z)
        player (j/get db :player)
        _ (when (key-pressed? :Space)
            (apply-impulse player (v3 0 100 0) (get-pos player)))
        ref (v3)
        _ (get-linear-velocity-to-ref player ref)
        speed 5
        dir-vec (v3 (* x speed) (j/get ref :y) (* z speed))]
    (when (key-pressed? :KeyW)
      (set-linear-velocity player dir-vec)
      #_(j/call-in db [:player :physicsBody :applyForce]
                   (v3 (* x speed) 0 (* z speed))
                   (j/call-in db [:player :getAbsolutePosition])
                   #_(j/call-in db [:player :physicsBody :getObjectCenterWorld])))))

(defn register-scene-event [scene]
  (let [action-manager (create-action-manager scene)
        f (fn [evt]
            (j/assoc-in! db [:input-map (m/get evt :sourceEvent :code)] (= (m/get evt :sourceEvent :type) "keydown")))]
    (register-action action-manager :ActionManager/OnKeyDownTrigger f)
    (register-action action-manager :ActionManager/OnKeyUpTrigger f)))

(defn create-light []
  (let [light (j/assoc! (DirectionalLight. "light1" (v3 -1 -2 -1))
                        :position (v3 20 40 20))
        shadow-generator (ShadowGenerator. 1024 light)]
    (j/call shadow-generator :addShadowCaster (j/get db :player))))

(defn start-scene []
  (go
    (try
      (let [canvas (js/document.getElementById "renderCanvas")
            engine (create-engine canvas)
            scene (create-scene engine)
            hk (<p! (HavokPhysics))
            _ (enable-physic-engine hk scene)
            player (create-player)
            camera (create-arc-camera canvas player)
            _ (<! (create-terrain))]
        (set-pointer-down scene canvas)
        (create-sky-box)
        (register-scene-event scene)
        (j/call-in scene [:onBeforeRenderObservable :add] (fn []
                                                            (update-from-keyboard)
                                                            (let [{:keys [camera scene player]} (j/lookup db)
                                                                  result (PhysicsRaycastResult.)
                                                                  player-pos (get-pos player)
                                                                  camera-pos (j/get camera :globalPosition)
                                                                  physics-engine (j/call scene :getPhysicsEngine)]
                                                              (j/call physics-engine :raycastToRef player-pos camera-pos result)
                                                              (when (j/get result :hasHit)
                                                                (j/update! camera :radius - 0.5)))))
        (j/call-in scene [:onAfterRenderObservable :add] (fn []))
        (create-light)
        (j/call engine :runRenderLoop #(j/call scene :render))
        (js/window.addEventListener "resize" #(j/call engine :resize)))
      (catch js/Error e
        (js/console.error e)))))

(defn ^:dev/after-load start []
  (js/console.log "start")
  (start-scene))

;; TODO make sure clear all event listeners
(defn ^:dev/before-load stop []
  (js/console.clear)
  (js/console.log "stop")
  (j/call-in db [:engine :dispose]))

(defn init []
  (js/console.log "init")
  (start))

(comment
  (m/get db :camera :radius)
  (j/call (j/get db :player) :intersectsMesh (j/get db :terrain))
  (j/call-in db [:engine :getFps])
  (j/call-in db [:scene :debugLayer :show])
  (j/call-in db [:player :physicsBody :applyForce] (v3 -50 0 0) (v3 0 0 0))
  )
