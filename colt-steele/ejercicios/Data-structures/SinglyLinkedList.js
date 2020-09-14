
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

    print(){
        console.log("**Printing elements....");
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next ? current.next : undefined;
        }
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

    remove(index){
        if(!index || index < 0 || index >= this.length) return;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let previous = this.get(index - 1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed; 
    }
    // [25,36,4,69,90,22]  solo para guiarme
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i=0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
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
list.print();

console.log('---removed',list.remove(2));
list.print();

console.log('---reverse',list.reverse());
list.print();
