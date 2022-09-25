let arr2 = [7, 1, 5, 3, 6, 4]
let arr = [7, 6, 4, 3, 1]


let temp = {'profit': 0, 'day': -1, 'min': arr[0]}

for(let i=1;i<arr.length;i++){
    if(arr[i] < temp.min){
        temp.min = arr[i]
    }
    let diff = arr[i] - temp.min
    if(diff>temp.profit && diff > 0){
        temp['profit'] = diff
        temp['day'] = i+1
        temp['min'] = temp.min
    }
}

// TC - O(n)
// SC - O(1)