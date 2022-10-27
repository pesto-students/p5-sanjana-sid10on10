let trust = [[1,3],[2,3]]

let trust1 = [[1,3],[2,3],[3,1]]

let adjList = {}

function addVertex(u, v){
    if(u in adjList){
        adjList[u].push(v)
    }else{
        adjList[u] = [v]
    }
    if(!(v in adjList)){
        adjList[v] = []
    }
}

function findJudge(adjList){
    let possible_judge = []
    for(let [key, value] of Object.entries(adjList)){
        if(value.length==0){
            possible_judge.push(key)
        }
    }
    for(i=0;i<possible_judge.length;i++){
        let allNodes = Object.keys(adjList)
        let index = allNodes.indexOf(possible_judge[i])
        allNodes.splice(index, 1)
        for(each of allNodes){
            if(adjList[each].includes(Number(possible_judge[i]))){
                // pass
            }else{
                possible_judge.splice(i, 1)
            }
        }
    }
    if(possible_judge.length == 1){
        return possible_judge[0]
    }else{
        return -1
    }
}

for(i of trust){
    addVertex(i[0], i[1])
}

console.log(adjList)

console.log(findJudge(adjList))