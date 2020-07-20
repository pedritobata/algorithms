

// Ordenar un array de enteros de forma ascendente usando bubble sort
console.log("*********** PRIMERA SOLUCION **********");
function bubbleSort1(arr){
    //funcion helper para hacer un swap
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }
    // for anidados... guarda!!
    for(let i = arr.length; i > 0; i--){
        for(let j=0; j < i - 1; j++ ){
            if(arr[j] > arr[j+1]) swap(arr,j, j + 1);
        }
    }
    return arr;
}


let arr = [-3,8,12,29,1,5,50];
console.log("Array ordenado:", bubbleSort1(arr));

