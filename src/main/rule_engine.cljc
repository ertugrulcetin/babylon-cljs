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

(defn- check-has-different-id-or-binding [rule whats attr->id+binding]
  (doseq [[id attr binding] whats
          :let [id-str (str (if (seq? id)
                              (second id)
                              id))
                binding-str (str (if (seq? binding)
                                   (second binding)
                                   binding))
                id-&-binding [id-str binding-str]
                prev-id-&-binding (get @attr->id+binding attr)]]
    (if (and prev-id-&-binding (not= prev-id-&-binding id-&-binding))
      (throw (ex-info
               (str "Attribute " attr " has different id or binding in " rule)
               {:rule rule
                :id id-str
                :attr attr
                :binding binding-str
                :correct-id-binding prev-id-&-binding}))
      (swap! attr->id+binding assoc attr id-&-binding))))

(defn- get-rule-whats [rule]
  (map
    (fn [tuples]
      (let [[id attr binding opts] tuples]
        [(second id) attr (second binding) opts]))
    (get-in @main.rule-engine/db [rule :what])))

(defn- remove-duplicated-what-from-deps [rule what]
  (some
    (fn [what]
      (let [[id attr binding] what
            [id2 attr2 binding2] rule]
        (= [id attr binding] [id2 attr2 binding2])))
    what))

(defmacro reg-pred [name {:keys [what when deps]}]
  (cond
    (nil? (seq what))
    (throw (ex-info (str "You need to define :what block for " name) {}))

    (nil? (seq when))
    (throw (ex-info (str "You need to define :when block for " name) {})))
  (let [attr->id+binding (atom {})
        what (if (vector? (first what)) what [what])
        when (if (vector? (first when)) when [when])
        _ (doseq [rule deps]
            (if-let [whats (get-in @main.rule-engine/db [rule :what])]
              (check-has-different-id-or-binding rule whats attr->id+binding)
              (throw (ex-info (str "Rule " rule " does not exist") {:rule rule}))))
        _ (check-has-different-id-or-binding name what attr->id+binding)
        deps-what (mapcat get-rule-whats deps)
        deps-what (remove #(remove-duplicated-what-from-deps % what) deps-what)
        what (vec (distinct (concat deps-what what)))
        deps-when (distinct
                    (concat
                      (mapcat #(second (get-in @main.rule-engine/db [% :when])) deps)
                      when))]
    `(do
       ~(swap! main.rule-engine/db assoc-in [name :what] (mapv
                                                           (fn [what]
                                                             `['~(first what)
                                                               ~(second what)
                                                               '~(nth what 2)
                                                               {:then false}])
                                                           what))
       ~(swap! main.rule-engine/db assoc-in [name :when] `'~deps-when)
       ~name)))

(defmacro reg-rule [name {:keys [session temp preds what then then-finally] :as opts}]
  (let [what (if (vector? (first what)) what [what])
        preds-what (mapcat get-rule-whats preds)
        preds-what (remove #(remove-duplicated-what-from-deps % what) preds-what)
        what (vec (distinct (concat [:what] preds-what what)))
        preds-when (mapcat
                     (fn [p]
                       (second (get-in @main.rule-engine/db [p :when])))
                     preds)
        when* (:when opts)
        when* (if (vector? (first when*)) when* [when*])
        whens (distinct (concat preds-when when*))]
    `(let [_# (when ~temp
                (swap! main.rule-engine/db assoc-in [~name :temp] (j/lookup (main.utils/shallow-clj->js ~temp))))
           ~'temp (get-in @main.rule-engine/db [~name :temp])
           session# (or ~session main.rule-engine/*session)]
       (swap! session#
              (fn [session#]
                (let [session# (try
                                 (o/remove-rule session# ~name)
                                 (catch js/Error _#
                                   session#))]
                  (o/add-rule session# (first (o/ruleset
                                                ~{name (cond-> what
                                                         (> (count whens) 0) (into (cons :when whens))
                                                         then (conj :then then)
                                                         then-finally (conj :then-finally then-finally))}))))))
       ~name)))

(comment
  (reset! *session (reduce o/add-rule (o/->session) (o/ruleset)))


  (run-rules)
  (macroexpand-1 '(run-rules))


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
