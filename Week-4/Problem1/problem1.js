function getNumber(timeout){
    let number = Math.floor((Math.random())*1000)
    let promise = new CustomPromise((resolve, reject)=>{
        setTimeout(()=>{
            if(number%5===0){
                reject(0)
            }else{
                resolve(1)
            }
        }, timeout)
    })
    return promise
}

function CustomPromise(cb){
    this.value = null
    this.currentStatus = 'Pending'
    this.resolveFunc = (data)=>{
        this.currentStatus = 'Fullfilled'
        this.value = data
    }
    this.rejectFunc = (data)=>{
        this.currentStatus = 'Rejected'
        this.value = data
    }
    cb(this.resolveFunc, this.rejectFunc)
    return this
}

let mypromise = getNumber(5000)
console.log(mypromise)
setTimeout(()=>{console.log(mypromise.value)}, 7000)