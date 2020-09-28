const c = console.log;

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print(){
        c("Printing elements...");
        let current = this.head;
        while(current){
            c(current);
            current = current.next ;
        }
    }

    push(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        const poppedNode = this.tail;
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if(this.length === 0) return undefined;
        const oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;

    }

    unshift(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let count, current;
        if(index <= this.length / 2){
            count = 0; current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        }else{
            count = this.length - 1; current = this.tail;
            while(count != index){
                current = current.prev;
                current--;
            }
        }
        return current;
    }

    set(index, val){
        if(this.get(index) == null) return false;
        let foundNode = this.get(index);
        foundNode.val = val;
        return true
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        const beforeNode = this.get(index - 1);
        const afterNode = this.get(index);
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        const removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

const list = new DoublyLinkedList();
list.print();
list.push("Hola");
list.push("Como");
list.push("Estan?");
list.print();
/* c("popped:", list.pop());
list.print(); */
c("shifted:", list.shift());
//list.print();
list.unshift("Hello");
list.print();
c("getting",list.get(2));
c("getting",list.get(-10));
c("getting",list.get(10));
c("setting",list.set(0, "Yo"));
list.print();
c("setting",list.set(10, "Yo"));
c("insert",list.insert(2, "Perico"));
c("insert",list.insert(0, "ayayay"));
list.print();
c("remove",list.remove(2));
list.print();