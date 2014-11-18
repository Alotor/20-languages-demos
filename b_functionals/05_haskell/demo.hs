getAnswer :: IO Integer
getAnswer = readLn

solve :: Integer -> Integer -> Either Integer String
solve secret value =
    if secret == value
        then Right "You're right!"
        else Left secret

main :: IO ()
main = do putStrLn "What is 2 + 2?"
          x <- getAnswer
          case solve 4 x of
              Right msg -> putStrLn msg
              Left num -> putStrLn ("You're wrong " ++ show num)

