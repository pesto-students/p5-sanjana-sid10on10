// let arr = [5, 10, 3, 2, 50, 80]
// let x = 78

// let all_pairs = []

// // Solution 1


// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length+1;j++){
//         all_pairs.push([arr[i], arr[j]])
//     }
// }

// const diff = (pair)=>{
//     return Math.abs(pair[0] - pair[1])
// }

// all_diff = all_pairs.map(diff)

// let filtered = all_diff.filter(item=>item==x)

// console.log(filtered)

// TC -> O(n^2)
// SC -> O(n)


// Solution - 2

// i + x = arr[i]

let arr = [5, 10, 3, 2, 50, 80]
let x = 78

function sum_pair_checker(arr, x){
    for(let i of arr){
        if(arr.includes(i+x)){
            return 1
        }
    }
    return 0
}

let result = sum_pair_checker(arr, x)
console.log(result)



