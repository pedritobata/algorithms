console.log('*********** Ejercicio 4 ************');

// FRECUENCY COUNTER & MULTIPLE POINTERS

console.log('*********** Classic Multiple pointers first!! ************');
// Dado un arreglo de enteros positivos o negativos, retornar cuantos elementos unicos hay
// [-5,1,1,1,2,2,3,4,4,4,4,5,6,7,7,7,7]
// [1,1,1,1,1,1,1,1,0]
// [1,2,3,4,5,6]
// []
// [100,1, -1, 4, 0,1, 3, 4,4 ]

//Este algoritmo funciona cuando el arreglo está ordenado!!
 function uniques(arr){
    if(arr.length === 0) return 0;
    let i = 0; //primer pointer
    for(let j=1; j<arr.length; j++){
        if(arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
 }

 let arr = [100,1, -1, 4, 0,1, 3, 4,4 ];
 console.log('repetidos:', uniques(arr));

 // 