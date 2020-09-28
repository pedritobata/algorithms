const c = console.log;

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    print(){
        c('*******Printing...')
        let current = this.first;
        while(current){
            c(current);
            current = current.next;
        }
        c("first:", this.first);
        c("last:", this.last);
        c("size:", this.size);
    }

    //inserta al comienzo!!
    push(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    // elimina al comienzo  LIFO!!
    pop(){
        if(!this.first) return null;
        const tmp = this.first;
        if(this.size === 1){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return tmp.val;
    }
}

const stack = new Stack();
stack.push(12);
stack.push(15);
stack.push(5);
stack.push(100);
stack.print();
stack.pop();
stack.print();
stack.pop();stack.pop();stack.pop();
stack.print();