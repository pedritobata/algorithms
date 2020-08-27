// Bubble sort optimizado

function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        let noSwap = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]) 
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            noSwap = false;
        }
        if(noSwap) break;
    }
    return arr;
}

const arr = [-4,21,5,13,33,1,6,10];
console.log('Sorting:' , bubbleSort(arr));