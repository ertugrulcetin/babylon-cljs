(ns main.rule-engine
  (:require
    [applied-science.js-interop :as j]
    #?(:cljs [main.utils])
    [odoyle.rules :as o]))

(defonce db (atom {}))

(defonce *session (atom (o/->session)))

(defn reset-session []
  (reset! db {})
  (reset! *session (o/->session)))

(defn insert [id attr value]
  (swap! *session (fn [session] (-> session
                                    (o/insert id attr value)
                                    o/fire-rules)))
  nil)

(defmacro reg-pred [name {:keys [what when]}]
  `(do
     ~(swap! main.rule-engine/db assoc-in [name :what]
             (if (vector? (first what))
               (mapv
                 (fn [what]
                   `['~(first what)
                     ~(second what)
                     '~(nth what 2)
                     {:then false}])
                 what)
               `[['~(first what)
                  ~(second what)
                  '~(nth what 2)
                  {:then false}]]))
     ~(swap! main.rule-engine/db assoc-in [name :when] `'~when)
     ~name))

(defn remove-rule
  "Removes a rule from the given session."
  [session rule-name]
  (if-let [node-id (get-in session [:rule-name->node-id rule-name])]
    (-> session
        (update :beta-nodes dissoc node-id)
        (update :rule-name->node-id dissoc rule-name)
        (update :node-id->rule-name dissoc node-id))
    session))

(defmacro reg-rule [name {:keys [session temp preds what then] :as opts}]
  (let [preds-what (vec
                     (mapcat
                       (fn [p]
                         (map
                           (fn [tuples]
                             (let [[id attr data opts] tuples]
                               [(second id) attr (second data) opts]))
                           (j/get-in @main.rule-engine/db [p :what])))
                       preds))
        preds-when (map
                     (fn [p]
                       (second (j/get-in @main.rule-engine/db [p :when])))
                     preds)
        preds-when (when (seq preds-when)
                     (cons 'and preds-when))]
    `(let [_# (when ~temp (swap! main.rule-engine/db assoc-in [~name :temp] (j/lookup (main.utils/shallow-clj->js ~temp))))
           ~'temp (j/get-in main.rule-engine/db [~name :temp])
           session# (or ~session main.rule-engine/*session)]
       (swap! session# remove-rule ~name)
       (swap! session# o/add-rule (first (o/ruleset ~{name
                                                      (let [what (if (vector? (first what)) what [what])
                                                            what (vec (concat [:what] preds-what what))
                                                            whens (concat preds-when (:when opts))]
                                                        (cond-> what
                                                          (> (count whens) 0) (conj :when whens)
                                                          then (conj :then then)))})))
       ~name)))

(comment

  (macroexpand-1 '(reg-rule
                    ::set
                    {:temp {:deneme 3333}
                     :preds [:pred/alive?]
                     :what [[::kek ::kek ses]
                            [::lol ::lol lol]]
                     :then (let [{:keys [deneme]} temp]
                             (println "deneme: " deneme))}))

  (macroexpand-1 '(reg-rule
                    ::get
                    {:what [::ses ::ses ses]
                     :then (println "aga2: " temp)}))
  )
