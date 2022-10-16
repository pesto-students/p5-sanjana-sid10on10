let arr = [3, 9, 20, null, null, 15, 7]

class Node {
    constructor(data){
        this.left = null
        this.right = null
        this.data = data
    }
}

class Tree {
    constructor(root){
        this.root = root
        this.arr = []
    }

    printPreorder(root){
        if(root==null){
            return
        }
        this.arr.push(root.data)
        this.printPreorder(root.left)
        this.printPreorder(root.right)
    }
}


let array = []

for(let i=0;i<arr.length;i++){
    let left = 2*i+1
    let right = 2*i+2
    if(left<=arr.length-1 && right <= arr.length-1){
        let node = new Node(arr[i])
        node.left = new Node(arr[left])
        node.right = new Node(arr[right])
        array.push(node)
    }
}


console.log(array)

let tree = new Tree(array[0])

tree.printPreorder()
// level order traversal
console.log(arr)
