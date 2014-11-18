macro time(ex)
  quote
    local t0 = time()
    local val = $ex
    local t1 = time()
    println("elapsed time: ", t1-t0, " seconds")
    val
  end
end

fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)

@time fib(30)
