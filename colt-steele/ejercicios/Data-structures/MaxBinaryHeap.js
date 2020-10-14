
class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];//ejemplo para no estar llenando el heap manualmente
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while(idx > 0){
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

}

const maxBinaryHeap = new MaxBinaryHeap();
console.log("Heap:", maxBinaryHeap);
maxBinaryHeap.insert(55);
console.log("Heap:", maxBinaryHeap);
maxBinaryHeap.insert(1);
console.log("Heap:", maxBinaryHeap);
maxBinaryHeap.insert(45);
console.log("Heap:", maxBinaryHeap);
maxBinaryHeap.insert(199);
console.log("Heap:", maxBinaryHeap);
