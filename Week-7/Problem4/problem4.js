let string = '{([])}'
let string2 = '([]'
let stack = []
let openStr = ['(', '{', '[']
let closeStr = [')', '}', ']']

function checker(string){
    let arr = Array.from(string)
    for(let i=0;i<arr.length;i++){
        if(openStr.includes(arr[i])){
            stack.push(arr[i])
        }else if(closeStr.includes(string[i])){
            let peek = stack[stack.length-1]
            if(peek!=openStr[closeStr.indexOf(arr[i])]){
                return false
            }else{
                stack.pop()
            }
        }
    }
    if(stack.length>0){
        return false
    }
    return true
}

let result = checker(string2)
console.log(result)