console.log("********** ejercicio 12 *********");

// Write a function which takes in an array of numbers and returns
// the product of them all


function productOfArray(arr){
   if(!arr) return 0;
   if(arr.length === 0) return 1;
   return arr[0] * productOfArray(arr.slice(1));
}

const arr = [1,2,3,10];
console.log("****** solution 1 ********");
console.log( arr, "=", productOfArray(arr));