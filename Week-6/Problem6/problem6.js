let arr = [-1, 2, 1, -4]
let target = 1

let allPairs = []

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length+1;j++){
        if(arr.slice(i,j).length == 3){
            allPairs.push(arr.slice(i,j))
        }
    }
}
function sum(arr){
    let sum = arr.reduce((item, acc)=>{
        return acc+=item
    }, 0)
    return sum
}

let newarr = allPairs.map(sum)
let closearr = newarr.map((item)=>{return Math.abs(item-target)})
let min = Math.min(...closearr)
console.log(newarr[closearr.indexOf(min)])

