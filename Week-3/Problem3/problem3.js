function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement(); // count = 0
increment(); // count = 1
increment(); // count = 2
increment(); // count = 3
log();// What is logged?


// Logged value will be Count is 0 as increment does increment the value of count.
// At the start of program when message is defined count value was 0 and thus 
// value of message will be Count is 0 as it never gets updated again