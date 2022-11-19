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
        this.valid = true
    }

    printPreOrder(root){
        if(root==null){
            return
        }
        console.log(root.data)
        this.printPreOrder(root.left)
        this.printPreOrder(root.right)
    }

    validateBinaryTree(root){
        if(root==null){
            return
        }
        this.validateBinaryTree(root.left)
        if(root.left){
            if(root.left.data > root.data){
                this.valid = false
            }else{
                //
            }
        }
        // console.log(root.data)
        if(root.right){
            if(root.right.data < root.data){
                this.valid = false
            }else{
                //
            }
        }
        this.validateBinaryTree(root.right)
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

// example 1 
let root1 = createTree([2, 1, 3])
let tree1 = new Tree(root1)

tree1.printPreOrder(tree1.root)
tree1.validateBinaryTree(tree1.root)
console.log(tree1.valid)

console.log('------------>Second Example<--------------------')

// example 2
let root2 = createTree([5, 1, 4, null, null, 3, 6])
let tree2 = new Tree(root2)

tree2.printPreOrder(tree2.root)
tree2.validateBinaryTree(tree2.root)
console.log(tree2.valid)
