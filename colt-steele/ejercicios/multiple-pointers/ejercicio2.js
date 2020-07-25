// Dado un arreglo ordenado, contar cuantos numeros hay sin tomar en cuenta sus repetidos
//puede haber numeros negativos

function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }
    let i=0;
    for(let j=0; j < arr.length -1  ; j++){
        if(arr[j] !== arr[j+1]){
           // console.log(arr[j], 'vs' , arr[j+1]);
            i++;
        }
    }
    return i + 1;//le sumamos 1 porque la primera vez en el loop que se encuentre un elemento diferente 
    // a su siguiente (arr[j] !== arr[j+1]), ya se tendrán DOS elementos unicos (justamente arr[j] Y arr[j+1])
    // pero i recien ha contado 1!! (i++) ya que i empieza en 0.
}

let result = countUniqueValues([-5,1,1,1,2,2,3,4,4,4,4,5,6,7,7,7,7]);
console.log("******** MULTIPLE POINTERS ********");
console.log('Elementos unicos:', result);

console.log("******** SOLUCION 2 ********");
function countUniqueValues2(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j=1; j < arr.length; j ++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
result = countUniqueValues2([-5,1,1,1,2,2,3,4,4,4,4,5,6,7,7,7,7]);
console.log('Elementos unicos:', result);
