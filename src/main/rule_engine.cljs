(ns main.rule-engine
  (:require
    [applied-science.js-interop :as j]))

(defonce db (clj->js {:data {}}))
(j/assoc! db :lookup (j/lookup (j/get db :data)))

;; implement this
;; (reg-rule
;;    ::player
;;    {:what [[:player :position pos]
;;            [:player :forward forward]
;;            [:player :right right]]})
(defn reg-rule [name {:keys [what when then]}]
  (some->> when (j/assoc-in! db [:rules name :when]))
  (some->> then (j/assoc-in! db [:rules name :then]))
  (doseq [[k v then?] what]
    (j/assoc-in! db [:rules name :what k v] (nil? then?))))

(reg-rule
  ::player
  {:what [[:player :position false]
          [:player :forward]
          [:player :right]]
   :then (fn [{:keys [position forward right]}]
           (println "player is in the right position"))})

(defn insert [name data]
  (j/assoc-in! db [:data name] data))

(comment

  (insert! db {:player {:position false
                       :forward true
                       :right true}
              :enemy {:position true
                      :forward false
                      :right false}})
  )
