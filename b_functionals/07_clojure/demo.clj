(require '[clojure.string :as str])

(defn camel->keyword [s]
  (->> (str/split s #"(?<=[a-z])(?=[A-Z])")
       (map str/lower-case)
       (interpose \-)
       str/join
       keyword))

(println (camel->keyword "CamelCase"))
(println (camel->keyword "lowerCamelCase"))
