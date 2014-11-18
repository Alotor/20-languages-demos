package main

import ("fmt" ; "math/rand")

func GenerateRandom(ch chan<- float32) {
    for i := 1; ; i++ {
        ch <- rand.Float32()
    }
}

func main() {
    ch := make(chan float32)
    go GenerateRandom(ch)
    for i := 0; i < 20; i++ {
        random := <-ch
        fmt.Println(random)
    }
}