class Executor(a: Int, b: Int) {
    def execute(f: (Int, Int) => Int) = f(a,b)
}

val executor = new Executor(2, 3)
println("Suma: " + executor.execute((a,b) => a + b))
println("Producto: " + executor.execute((a,b) => a * b))