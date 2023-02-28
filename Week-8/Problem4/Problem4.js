// let edges =  [[0,1],[1,2],[2,0]]
let edges = [[0,1],[0,2],[3,5],[5,4],[4,3]]

let nodes = []

let adjacencyList = {}

for(let i=0;i<edges.length;i++){
    let [u, v] = edges[i]
    if(!nodes.includes(u)){
        nodes.push(u)
    }
    if(!nodes.includes(v)){
        nodes.push(v)
    }
    if(!(u in adjacencyList)){
        adjacencyList[u] = [v]
    }else{
        adjacencyList[u].push(v)
    }   
    if(!(v in adjacencyList)){
        adjacencyList[v] = [u]
    }else{
        adjacencyList[v].push(u)
    }
}

function bfs(adjacencyList){
    let queue = []
    let visited = new Set()
    queue.push(Object.keys(adjacencyList)[0])
    visited.add(Object.keys(adjacencyList)[0])
    while(queue.length){
        let current = queue.shift()
        console.log('visited ---> ', current)
        for(let i=0;i<adjacencyList[current].length;i++){
            let key = adjacencyList[current][i].toString()
            if(!visited.has(key)){
                visited.add(key)
                queue.push(key)
            }
        }
    }
}

function dfs(adjacencyList){
    let stack = []
    let visited = new Set()
    stack.push(Object.keys(adjacencyList)[0])
    visited.add(Object.keys(adjacencyList)[0])
    while(stack.length){
        let current = stack.pop()
        console.log('visited ---> ', current)
        for(let i=0;i<adjacencyList[current].length;i++){
            let key = adjacencyList[current][i].toString()
            if(!visited.has(key)){
                visited.add(key)
                stack.push(key)
            }
        }


    }
}

// bfs(adjacencyList)
// dfs(adjacencyList)
let path = []
function pathFinder(adjacencyList, src, target){
    let stack = []
    let visited = new Set()
    stack.push(src)
    visited.add(src)
    while(stack.length){
        let current = stack.pop()
        path.push(current)
        console.log('visited ---> ', current)
        if(current == String(target)){
            return true
        }
        for(let i=0;i<adjacencyList[current].length;i++){
            let key = adjacencyList[current][i].toString()
            if(!visited.has(key)){
                visited.add(key)
                stack.push(key)
            }
        }
    }
    return false
}

console.log(adjacencyList)

console.log(pathFinder(adjacencyList, '1', 5))
console.log(path)