type BinaryTree<'T> = 
      | Leaf of 'T 
      | Tree of BinaryTree<'T> * BinaryTree<'T>

      member this.Map(f) =
          match this with
          | Leaf(x) -> Leaf(f x)
          | Tree(left,right) ->
                Tree(left.Map(f), right.Map(f))

let t1 = Tree(Tree(Leaf(1), Leaf(2)),
              Tree(Leaf(3), Leaf(4)))

let t2 = t1.Map(fun x -> x * 10)