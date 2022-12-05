let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


function reverse(arr){
    let newarr = []
    for(let i=arr.length-1;i>=0;i--){
        newarr.push(arr[i])
    }
    return newarr
}

function spiral(matrix){
    let first = matrix.shift()
    let last = matrix.pop()
    last = reverse(last)
    
    let allRight = []

    for(let i=0;i<matrix.length;i++){
        allRight.push(matrix[i].pop())
    }


    let allLeft = []

    for(let i=0;i<matrix.length;i++){
        allLeft.push(matrix[i].shift())
    }


    allLeft = reverse(allLeft)

    if(matrix.length == 1 && matrix[0].length == 1){
        mid = matrix[0]
        let outarr = first.concat(allRight)
        outarr = outarr.concat(last)
        outarr = outarr.concat(allLeft)
        outarr = outarr.concat(mid)
        return outarr
    }else{
       return spiral(matrix)
    }
}

let data = spiral(arr)
console.log(data)