
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

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){//si el array no esta vacio
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let idx = 0;
        
        const length = this.values.length;
        while(true){
            let element = this.values[idx];
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(element < leftChild){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap == null && element < rightChild) ||
                   (swap != null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }

            }
            if(swap == null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;

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
maxBinaryHeap.extractMax();
console.log("Heap extract:", maxBinaryHeap);
maxBinaryHeap.extractMax();
console.log("Heap extract:", maxBinaryHeap);