let arr = [1, 2, 3, 4, -10]
let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let all_arr = []

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length+1;j++){
        all_arr.push(arr.slice(i,j))
    }
}

let all_arr2 = []


for(let i=0;i<arr2.length;i++){
    for(let j=i+1;j<arr2.length+1;j++){
        all_arr2.push(arr2.slice(i,j))
    }
}

const sum = (arr)=>{
    let sum = 0
    for(i of arr){
        sum+=i
    }
    return sum
}

all_arr = all_arr.map(sum)
all_arr2 = all_arr2.map(sum)

// console.log(all_arr)
// console.log(all_arr2)

console.log(Math.max(...all_arr))
console.log(Math.max(...all_arr2))

// TC -> O(n^2)
// SC -> O(n)