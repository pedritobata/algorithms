const c = console.log;

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    print(root){
        if(!root) return;
       c(root);
        let left = this.print(root.left);
        let right = this.print(root.right);
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left) current = current.left;
                else {current.left = newNode;
                return this;}
            }else if(value > current.value){
                if(current.right) current = current.right;
                else {current.right = newNode;
                return this;}
            }
        }
    }

    find(value){
        if(this.root === null) return null;
        let current = this.root;
        while(current){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                break;
            }
        }
        return current;
    }

    breadthFirstSearch(){
        let node = this.root, queue = [], result = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            result.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return result;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(20);
bst.insert(3);
bst.insert(8);
// bst.insert(11);
// bst.print(10);
c(bst);
c("found:",bst.find(5));
c("found:",bst.find(2));
c("found:",bst.find(20));
c("bread first search:", bst.breadthFirstSearch());