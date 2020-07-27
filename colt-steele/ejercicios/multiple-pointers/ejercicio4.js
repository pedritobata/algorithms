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

 // areThereDuplicates Solution (Frequency Counter)
 console.log('********* areThereDuplicates Solution (Frequency Counter) ***********');
 function areThereDuplicates1(arr){
     //Usando Frequency counter el array No tiene que estar ordenado necesariamente
    if(arr.length === 0) return false;
    const duplicates = {};
    for(let val of arr){
        if(!duplicates[val]) duplicates[val] = 1;
        else return true;
    }
    return false;
 }

 arr = ['a','b','c','a'];
 console.log('are There duplicates using frequency counter:', areThereDuplicates1(arr));


  // areThereDuplicates Solution (Multiple Pointers)
  console.log('********* areThereDuplicates Solution (Multiple Pointers) ***********');
  function areThereDuplicates2(...args){///usaremos varargs!!
        //Usando Multiple Pointers el array tiene que estar ordenado necesariamente
        if(args.length === 0) return false;
        const sortedArgs = args.sort((a,b) => a - b);
        let currentPos = 0;
        let next = 1;
        while(next < args.length){
            if(args[currentPos] === args[next])  return true;
            currentPos++;
            next++;
        }
        return false;
  }
 
  console.log('are There duplicates using Multiple Pointers:', areThereDuplicates2(3,7,9,1,5,6));

    // areThereDuplicates SHORT Solution 
    console.log('********* areThereDuplicates SHORT Solution ***********');
    function areThereDuplicates3(args){

        return new Set(args).size !== args.length;
    }


arr = [3,7,9,1,5,6,7];
console.log('are There duplicates using SHORT Solution with Set Class:', areThereDuplicates3(arr));

