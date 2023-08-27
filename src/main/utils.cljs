(ns main.utils)

(defn shallow-clj->js [m]
  (let [js-obj (js-obj)]
    (doseq [[k v] m]
      (aset js-obj (name k) v))
    js-obj))
