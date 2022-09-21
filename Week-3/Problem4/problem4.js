function createStack(){
    let items = []
    return {
        push(item){
            return items.push(item);
        },
        pop(){
            return items.pop();
        },
        print(){
            return items
        }
    };
}

const stack = createStack();
stack.push(10)
stack.push(20)
console.log(stack.items); // undefined
stack.items = [10,20,5,25,14]
console.log(stack.items); // defined but not items
stack.push(5)
console.log(stack.print()) // encapsulation entact [10,20,5]
