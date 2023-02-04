let arr = [[4,3,1],[3,2,4],[3],[4],[]]

let adjacencyList = {}

for(let i=0;i<arr.length;i++){
    adjacencyList[i] = arr[i]
}

console.log(adjacencyList)

let path = []
let visited = new Set()

function pathFinder(adjacencyList, src, target){
    visited.add(src)
    path.push(src)

    if(src==target){
        console.log(path)
    }else{
        for(i of adjacencyList[src]){
            if(!(visited.has(i))){
                pathFinder(adjacencyList, i, target)
            }
        }
    }
    // remove vertex from path as if path found
    path.pop()
    visited.delete(src)
}

pathFinder(adjacencyList, 0, 4)
