(ns test.reg-rule-test
  (:require
    [cljs.test :refer-macros [deftest is testing]]
    [main.rule-engine :as re :refer-macros [reg-rule reg-pred]]))

(deftest reg-rule-test
  (testing "returns empty claims"
    (is (= '(clojure.core/let [___109720__auto__ (clojure.core/when nil
                                                   (clojure.core/swap! main.rule-engine/db clojure.core/assoc-in [::my-rule :temp] (applied-science.js-interop/lookup (main.utils/shallow-clj->js nil))))
                               temp (applied-science.js-interop/get-in main.rule-engine/db [::my-rule :temp])
                               session__109721__auto__ (clojure.core/or nil main.rule-engine/*session)]
              (clojure.core/swap! session__109721__auto__ main.rule-engine/remove-rule ::my-rule) (clojure.core/swap! session__109721__auto__ odoyle.rules/add-rule (clojure.core/first (odoyle.rules/ruleset {::my-rule [:what [::player ::x x]]}))) ::my-rule)
           (macroexpand-1 '(reg-rule
                             ::my-rule
                             {:what [::player ::x x]}))))))

(cljs.test/run-tests)
