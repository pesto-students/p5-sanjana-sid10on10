let arr = [2, 4, 7, 8, 9]

class Node {
    constructor(data){
        this.data = data
        this.next = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head
        this.size = 0
    }

    insertHead(node){
        this.head = node
        this.size++;
    }

    insertAtLast(data){
        let node = new Node(data)
        if(this.head){
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
            this.size++;
        }else{
            this.head = node
            this.size++;
        }
    }

    printLinkedList(){
        let current = this.head
        let string = ''
        while(current){
            string+=` ${current.data} ->`
            current = current.next
        }
        string+=' null'
        console.log(string)
    }

    getSize(){
        console.log(this.size)
    }

    reverseList(){
        if(this.head){
            let current = this.head
            let prev = null
            while(current!=null){
                let next = current.next
                if(next==null){
                    this.head = current
                }
                current.next = prev
                prev = current
                current = next
            }
        }else{
            console.log('Linked List is empty')
        }
    }

    rotateByK(k){
        let optimizeK = k%this.size
        let count = 0
        let queue = []

        let current = this.head
        while(count!=optimizeK){
            queue.push(current.data)
            current = current.next
            count++;
        }
        this.head = current
        while(queue.length!=0){
            let element = queue.shift()
            this.insertAtLast(element)
        }
    }
}

let MyLinkedList = new LinkedList()

for(let i=0;i<arr.length;i++){
    MyLinkedList.insertAtLast(arr[i])
}

MyLinkedList.printLinkedList()
MyLinkedList.getSize()
MyLinkedList.rotateByK(12)
MyLinkedList.printLinkedList()
