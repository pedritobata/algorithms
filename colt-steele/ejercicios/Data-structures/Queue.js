const c = console.log;

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    print(){
        c("Printing elements...")
        let current = this.first;
        while(current){
            c(current);
            current = current.next;
        }
        c('first:', this.first);
        c('last:', this.last);
        c('size:', this.size);
    }

    enqueue(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        let tmp = this.first;
        if(this.size === 1){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return tmp;
    }
}

const myQueue = new Queue();
c("enqueue", myQueue.enqueue("Pedro"));
c("enqueue", myQueue.enqueue("Martinez"));
c("enqueue", myQueue.enqueue("Goyoneche"));
myQueue.print();
c("dequeue", myQueue.dequeue());
myQueue.print();