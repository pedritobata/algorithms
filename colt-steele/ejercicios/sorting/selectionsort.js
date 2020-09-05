// Selection Sort

function selectionSort(arr){
    if(!arr || arr.length === 0) return "Array not valid!";
    for(let i=0; i < arr.length - 1; i++){
        let lowestIndex = i;
        for(let j = i + 1; j < arr.length; j++ ){
            if(arr[j] < arr[lowestIndex]){
                lowestIndex = j;
            }
        }
        if(i !== lowestIndex){
            const tmp = arr[i];
            arr[i] = arr[lowestIndex];
            arr[lowestIndex] = tmp;
        }
    }
    return arr;
}

console.log("Selection Sort:",selectionSort([34,22,10,19,17]));