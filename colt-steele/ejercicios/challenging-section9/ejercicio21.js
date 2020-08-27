console.log("********** ejercicio 21 *********");

// Write a recursive function which given an array of words returns a
// new array containing each word capitalized


function capitalizeWords(arr){
    if(!arr) return 'Array must not be empty!!';
    if(arr.length === 0) return [];

    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
   
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log("****** solution 1 ********");
console.log( "Capitalize words",  '=', capitalizeWords(words) );
