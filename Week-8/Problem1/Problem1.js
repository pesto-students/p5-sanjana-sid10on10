let arr = [3, 9, 20, null, null, 15, 7]
let arr2 = [1, null, 2]


let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//       1
//    2     3
//  4  5   6  7
// 8 9
 

function getLevel(arr){
    let x = 1
    let length = arr.length
    let index = (length-3)/2
    if(index==0){
        return x+1
    }else{
        return x + index
    }
}

let result = getLevel(arr)
let result1 = getLevel(arr2)
let result2 = getLevel(arr3)

console.log(result, result1, result2)