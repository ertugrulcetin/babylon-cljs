(ns main.core
  (:require
    ["babylonjs" :refer [Scene
                         Engine
                         Color3
                         CubeTexture
                         ArcRotateCamera
                         PhysicsImpostor
                         HemisphericLight
                         HavokPlugin
                         Mesh
                         MeshBuilder
                         StandardMaterial
                         Texture
                         PhysicsAggregate
                         PhysicsShapeType
                         PhysicsBody
                         PhysicsMotionType
                         ExecuteCodeAction
                         ActionManager
                         Vector3]]
    ["babylonjs-materials" :refer [GridMaterial]]
    ["/vendor/havok" :as HavokPhysics]
    [applied-science.js-interop :as j])
  (:require-macros [main.macros :as m]))

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

(defn color [r g b]
  (Color3. r g b))

(defn box [name & {:keys [size]}]
  (j/call MeshBuilder :CreateBox name #js {:size size}))

(defn capsule [name & {:keys [height radius]}]
  (j/call MeshBuilder :CreateCapsule name #js {:height height
                                               :radius radius}))

(defn create-action-manager [obj]
  (let [am (ActionManager.)]
    (j/assoc! obj :actionManager am)
    am))

(defn register-action [action-manager type callback]
  (j/call action-manager :registerAction (ExecuteCodeAction. (j/get ActionManager (name type)) callback)))

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

(defn create-arc-camera []
  (let [camera (ArcRotateCamera. "camera" 0 0 10 (v3))]
    (j/call camera :setPosition (v3 50 50 50))
    (j/call camera :attachControl (j/get db :canvas) true)
    (j/assoc! camera
              :checkCollisions true
              :applyGravity true
              :collisionRadius (v3 0.5)
              :lowerRadiusLimit 2
              :upperRadiusLimit 20)
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
    (when gravity-factor
      (j/call-in agg [:body :setGravityFactor] gravity-factor))
    (when linear-damping
      (j/call-in agg [:body :setLinearDamping] linear-damping))
    (when angular-damping
      (j/call-in agg [:body :setAngularDamping] angular-damping))
    (when mass-props
      (j/call-in agg [:body :setMassProperties] (clj->js mass-props)))
    (when motion-type
      (j/call-in agg [:body :setMotionType] (j/get PhysicsMotionType (name motion-type))))))

(defn create-player []
  (let [player (capsule "player" :height 1)
        mass 50]
    (j/assoc! player :checkCollisions true)
    (j/assoc! db :player player)
    (j/assoc-in! player [:position :y] 8)
    (physics-agg player
                 :type :PhysicsShapeType/CAPSULE
                 :mass mass
                 :restitution 0.0
                 :friction 1.0
                 :linear-damping 1.5
                 :angular-damping 0
                 :gravity-factor 1.5
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

(defn create-terrain []
  #_(let [ground (create-ground "ground"
                                :width 100
                                :height 100)]
      (physics-agg ground
                   :type :PhysicsShapeType/BOX
                   :friction 0.02
                   :mass 0)
      (m/assoc! ground :material (GridMaterial. "groundMaterial")
                :checkCollisions true
                :position.y -2
                :position.x -28))
  (create-ground-from-hm "ground"
                         :texture "img/heightMap.png"
                         :subdivisions 50
                         :width 100
                         :height 100
                         :max-height 10
                         :min-height 0
                         :on-ready (fn [ground]
                                     (physics-agg ground
                                                  :type :PhysicsShapeType/MESH
                                                  :friction 0.5
                                                  :restitution 0.0
                                                  :mass 0
                                                  :motion-type :PhysicsMotionType/STATIC)
                                     (m/assoc! ground :material (GridMaterial. "groundMaterial")
                                               :checkCollisions true
                                               :position.y -2
                                               :position.x -28))))

(defn key-pressed? [key]
  (j/get-in db [:input-map key] false))

(defn apply-force [mesh force location]
  (j/call-in mesh [:physicsBody :applyForce] force location))

(defn apply-impulse [mesh impulse location]
  (j/call-in mesh [:physicsBody :applyImpulse] impulse location))

(defn update-from-keyboard []
  (let [camera (j/get db :camera)
        forward (j/get (j/call camera :getForwardRay) :direction)
        forward (v3 (j/get forward :x) 0 (j/get forward :z))
        len (j/call forward :length)
        forward (v3 (/ (j/get forward :x) len) 0 (/ (j/get forward :z) len))
        x (j/get forward :x)
        z (j/get forward :z)
        ref (v3)
        _ (j/call-in db [:player :physicsBody :getLinearVelocityToRef] ref)
        speed 2
        dir-vec (v3 (* x speed) (j/get ref :y) (* z speed))]
    (when (key-pressed? :Space)
      (apply-impulse (j/get db :player) (v3 0 100 0) (j/call-in db [:player :getAbsolutePosition])))
    (when (key-pressed? :KeyW)
      (j/call-in db [:player :physicsBody :setLinearVelocity] dir-vec)
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

(defn start-scene []
  (let [canvas (js/document.getElementById "renderCanvas")
        engine (create-engine canvas)
        scene (create-scene engine)
        camera (create-arc-camera)
        mat (StandardMaterial. "material")]
    (j/assoc! mat :emissiveColor (color 0 0.58 0.86))
    (set-pointer-down scene canvas)
    (create-sky-box)
    (.then (HavokPhysics)
           (fn [hk]
             (enable-physic-engine hk scene)
             (let [player (create-player)]
               (j/assoc! player :material mat)
               (j/call camera :setTarget player))
             (create-terrain)
             (register-scene-event scene)
             (j/call-in scene [:onBeforeRenderObservable :add] #(update-from-keyboard)))
           (fn [error]
             (println error)))
    (HemisphericLight. "light1" (v3 0 1 0))
    (j/call engine :runRenderLoop #(j/call scene :render))
    (js/window.addEventListener "resize" #(j/call engine :resize))))

(defn ^:dev/after-load start []
  (js/console.log "start")
  (start-scene))

;;TODO make sure clear all event listeners
(defn ^:dev/before-load stop []
  (js/console.clear)
  (js/console.log "stop")
  (j/call-in db [:engine :dispose]))

(defn init []
  (js/console.log "init")
  (start))

(comment
  (j/call-in db [:engine :getFps])
  (j/call-in db [:scene :debugLayer :show])
  (j/call-in db [:player :physicsBody :applyForce] (v3 -50 0 0) (v3 0 0 0))
  )