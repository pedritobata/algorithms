
class HashTable{
    constructor(size = 4){
        this.keymap = new Array(size);
    }

    print(){
        this.keymap.forEach(item => console.log(item));
    }

    _hash(key){
        let total = 0;
        const WEIRD_PRIME = 31;
        for(let i=0; i < Math.min(key.length,100); i++ ){
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keymap.length;
        }
        return total;
    }

    set(key, value){
        const index = this._hash(key);
        if(!this.keymap[index]){
            this.keymap[index] = [];
        }
        this.keymap[index].push([key, value]);
    }
}

const hashTable = new HashTable();
hashTable.set("hello world", "good bye!");
hashTable.set("dogs", "are cool");
hashTable.set("cats", "are fine");
hashTable.set("i love", "pizza");
hashTable.print();

