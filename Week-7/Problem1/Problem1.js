let arr = [1, 2, 3, 4, 5, 6]

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

}

let MyLinkedList = new LinkedList()

for(let i=0;i<arr.length;i++){
    MyLinkedList.insertAtLast(arr[i])
}

MyLinkedList.printLinkedList()
MyLinkedList.getSize()
MyLinkedList.reverseList()
MyLinkedList.printLinkedList()
MyLinkedList.getSize()
