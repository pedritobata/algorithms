
// Insertion Sort

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++ ){
        let currentValue = arr[i];
        for(var j = i-1; j >=0 && arr[j] > currentValue; j--){
           
                arr[j+1] = arr[j];
        
        }
        //OJO***** solo puedo acceder a la variable j porque la he declarado como "var", con let mancamos!!
        arr[j + 1] = currentValue;
    }
    return arr;
}

console.log("Selection Sort:", insertionSort([2,1,9,76,4]));