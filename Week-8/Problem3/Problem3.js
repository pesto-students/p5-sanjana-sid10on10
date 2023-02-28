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
    }

    printPreOrder(root){
        if(root==null){
            return
        }
        console.log(root.data)
        this.printPreOrder(root.left)
        this.printPreOrder(root.right)
    }
}

function insertTreeNode(i, arr){
    let curr = null
    if(i<arr.length){
        curr = new Node(arr[i])
        curr.left = insertTreeNode(2*i+1, arr)
        curr.right = insertTreeNode(2*i+2, arr)
    }
    return curr
}

function createTree(arr){
    return insertTreeNode(0, arr)
}

let arr = [3, 9, 20, null, null, 15, 7]

let root = createTree(arr)

// pre order traversal
let tree = new Tree(root)
tree.printPreOrder(tree.root)


// level order traversal
let queue = []
let outarr = []
queue.push(root)

while (queue.length){
    let temp = queue.shift()
    outarr.push(temp)
    if(temp.left!=null){
        queue.push(temp.left)
    }
    if(temp.right!=null){
        queue.push(temp.right)
    }
}
// level order traversal
console.log(outarr)