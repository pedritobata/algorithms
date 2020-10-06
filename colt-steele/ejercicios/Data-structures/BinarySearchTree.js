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
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(16);
bst.insert(7);
bst.insert(2);
bst.insert(11);
bst.print(10);
c(bst);