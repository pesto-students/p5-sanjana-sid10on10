// .bind()
// returns a new function

function sum(a, b){
    return this.a+this.b
}

newfunc = sum.bind({a: 10, b: 30})
console.log(newfunc()) // returns 40

function sum2(a, b){
    return a+b
}

anotherfunc = sum2.bind(null, 100)
console.log(anotherfunc(200)) // returns 300

// .call()
// does not return a function

function multiply(a, b){
    return this.a * this.b
}

console.log(multiply.call({a: 10, b: 40})) // returns 400

// .apply()
// does not return a function
// used where indefinite no of arguments used

function summation(...arguments){
    let sum = 0
    for(i of arguments){
        sum+=i
    }
    return sum
}

console.log(summation.apply(null, [2,3,40,5]))
