// QUICKSORT

function findPivot(arr, start=0, end=arr.length - 1){

    function swap(arr, i, j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    let pivotIndex = start;
    for(let i=start + 1; i <= end; i++){
        if(arr[start] > arr[i]){
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }
   swap(arr, start, pivotIndex);
    return pivotIndex;
}

function quicksort(arr, start=0, end=arr.length - 1){
    if(start < end) {
        const pivot = findPivot(arr, start, end);
        quicksort(arr,start, pivot - 1);
        quicksort(arr,pivot + 1, end);
    }
   
    return arr;
}

console.log("quicksort:", quicksort([25,-1,46,23,6,5,28,0]));