// Crear una funcion que haga lo mismo que indexOf.
// debe recibir un arreglo ORDENADO y un numero. Retornará
// el index o posicion en la que se encuentre el numero dado

function binarySearch(arr, val){
    if(!arr || arr.length === 0) return -1;
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
        let middle = Math.floor((max + min)/2);
        if(val < arr[middle]){
            max = middle - 1;
        }else if(arr[middle] < val){
            min = middle + 1;
        }else{
            return middle;
        }
    }

    return -1;
}

console.log('******** SOLUCION 1 **********');
console.log('indice encontrado:', binarySearch([0,7,10,33,45,100],3));