
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return;
        let current = this.head;
        let newTail = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return current;
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(index !== counter){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        const found = this.get(index);
        if(found){
           found.val = val; 
           return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        this.get(index - 1).next = newNode;
        newNode.next = this.get(index);
        this.length++;
        return true;
    }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("there");
list.push("Aguanta");
console.log(list);

//console.log('poped',list.pop());
//console.log(list);

/* console.log('shifted',list.shift());
console.log(list); */

console.log('unshifted',list.unshift("Periquito"));

console.log('get',list.get(2));
console.log('set',list.set(1, "Where"));
console.log(list);

console.log('insert',list.insert(0, "Orientador!!"));
console.log(list);
console.log('insert',list.insert(list.length, "Nandinho!!"));
console.log(list);
