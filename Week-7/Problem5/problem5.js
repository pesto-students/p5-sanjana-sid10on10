let arr2 = [1, 3, 2, 4]
let arr = [6, 8, 0, 1, 3]

let stack = []
let outarr = []

for(let i=arr.length-1;i>=0;i--){
    while(stack && stack[stack.length-1]<arr[i]){
        stack.pop()
    }

    if(stack.length==0){
        outarr.splice(0, 0, -1)
        stack.push(arr[i])
    }else{
        outarr.splice(0, 0, stack[stack.length-1])
    }
    if(stack[stack.length-1]>arr[i]){
        stack.push(arr[i])
    }
}


console.log(outarr)