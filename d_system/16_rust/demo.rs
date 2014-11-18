fn succ(x: &int) -> int { *x + 1 }

fn main() {
    // Referencia mutable
    let x = &mut 5i;

    if *x < 10 {
        // Si "tomamos prestada" la referencia
        // Falla!
        // let y = &x;
        *x = succ(&*x);
    }

    println!("X value: {}", x);
}