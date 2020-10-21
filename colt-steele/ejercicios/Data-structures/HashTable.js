
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

    get(key){
        const index = this._hash(key);
        if(this.keymap[index]){
            for(let i=0; i < this.keymap[index].length; i++){
                if(this.keymap[index][i][0] === key){
                    return this.keymap[index][i][1];
                }
            }
        }
        return undefined;
    }

    values(){
        const arrValues = [];
        for(let i=0; i < this.keymap.length; i++){
            if(this.keymap[i]){
                for(let j=0; j < this.keymap[i].length; j++){
                    if(!arrValues.includes(this.keymap[i][j][1])){
                        arrValues.push(this.keymap[i][j][1]);
                    }
                }
            }
        }
        return arrValues;
    }

    keys(){
        const arrKeys = [];
        for(let i=0; i < this.keymap.length; i++){
            if(this.keymap[i]){
                for(let j=0; j < this.keymap[i].length; j++){
                    if(!arrKeys.includes(this.keymap[i][j][0])){
                        arrKeys.push(this.keymap[i][j][0]);
                    }
                }
            }
        }
        return arrKeys;
    }
}

const hashTable = new HashTable();
hashTable.set("hello world", "good bye!");
hashTable.set("dogs", "are cool");
hashTable.set("cats", "are fine");
hashTable.set("i love", "pizza");
hashTable.print();

const hashTable2 = new HashTable(17);
hashTable2.set("maroon","#800000");
hashTable2.set("yellow","#FF0000");
hashTable2.set("olive","#808000");
hashTable2.set("salmon","#FA8072");
hashTable2.set("lightcoral","#F08080");
hashTable2.set("mediumvioletred","#C71585");
hashTable2.set("violet","#C71585");
hashTable2.set("purple","#C71585");
hashTable2.set("plum","#DDA0DD");
console.log(hashTable2.get("maroon"));
console.log(hashTable2.get("mediumvioletred"));
hashTable2.set("Hola","Que talco");
console.log(hashTable2.get("Hola"));

console.log(hashTable.get("i love"));

console.log('hashTable2 values', hashTable2.values());
console.log('hashTable2 keys', hashTable2.keys());



