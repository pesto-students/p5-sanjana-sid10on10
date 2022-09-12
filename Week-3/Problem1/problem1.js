// add the n numbers
function add(a, b, ...arguments){
    b = b==undefined ? 0 : b
    let sum = 0;
    for(i of arguments){
        sum += i
    }
    return a + b + sum
}

// memoize function
function memoize(innerFunc){
    let obj = {}
    return function (...arguments){
        let argString = arguments.toString()
        if(argString in obj){
            return obj[argString]
        }
        obj[argString] = innerFunc(...arguments)
        return obj[argString]
    }
}

const memoizeAdd = memoize(add)

let a1 = memoizeAdd(100,100);//returns 200
let a2 = memoizeAdd(100);//returns 100
let a3 = memoizeAdd(100,200)//returns 300
let a4 = memoizeAdd(100,100)//returns 200 without Computing
let a5 = memoizeAdd(100,200,300)
