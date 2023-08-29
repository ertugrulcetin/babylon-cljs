(ns main.rule-engine
  (:require
    [applied-science.js-interop :as j]
    #?(:cljs [main.utils])
    [odoyle.rules :as o]))

(defonce db (atom {}))

(defonce *session (atom (o/->session)))

(defonce id-gen (atom 0))

(defn reset-session []
  (reset! db {})
  (reset! id-gen 0)
  (reset! *session (o/->session)))

(defn insert [id attr value]
  (swap! *session
         (fn [session]
           (-> session
               (o/insert id attr value)
               o/fire-rules)))
  nil)

(defn remove-rule
  "Removes a rule from the given session."
  [session rule-name]
  (if-let [node-id (get-in session [:rule-name->node-id rule-name])]
    (-> session
        (update :beta-nodes dissoc node-id)
        (update :rule-name->node-id dissoc rule-name)
        (update :node-id->rule-name dissoc node-id))
    session))

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

(defmacro ruleset
     "Returns a vector of rules after transforming the given map."
     [rules]
  (println (o/parse ::o/rules rules))
     (reduce
       (fn [v {:keys [rule-name fn-name conditions when-body then-body then-finally-body arg] :as rr}]
         ;(println rr)
         (conj v `(o/->Rule ~rule-name
                          (mapv o/map->Condition ~conditions)
                          nil
                          ~(when (some? when-body)          ;; need some? because it could be `false`
                             `(fn ~fn-name [~'session ~arg] ~when-body))
                          ~(when then-body
                             `(fn ~fn-name [~'session ~arg] ~@then-body))
                          ~(when then-finally-body
                             `(fn ~fn-name [~'session] ~@then-finally-body)))))
       []
       (mapv o/->rule (o/parse ::o/rules rules))))

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
       (remove-rule session# ~name)
       (swap! db update :rules (fnil conj []) (ruleset ~{name (cond-> what
                                                                        (> (count whens) 0) (into (cons :when whens))
                                                                        then (conj :then then)
                                                                        then-finally (conj :then-finally then-finally))}))
       #_(reset! session# (reduce o/add-rule @session#
                                  (o/ruleset
                                    ~{name (cond-> what
                                                   (> (count whens) 0) (into (cons :when whens))
                                                   then (conj :then then)
                                                   then-finally (conj :then-finally then-finally))})))
       ~name)))


(defn register-rules []
  (reset! *session (reduce o/add-rule @*session (apply concat (get @main.rule-engine/db :rules)))))

(comment
  (register-rules)
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
