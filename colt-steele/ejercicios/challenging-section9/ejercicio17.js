console.log("********** ejercicio 17 *********");

// Write a recursive function which accepts an array and a callback. The function returns true
// if a single value in the array returns true when passed to the callback.
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


function someRecursive(arr, cb){
    if(!arr) return 'Array must not be empty!!';
    if(arr.length === 0) return false;
    return (cb(arr[0]) === true) || someRecursive(arr.slice(1), cb);

}

const isOdd = val => val % 2 !== 0;

console.log("****** solution 1 ********");
console.log( "There is a single element that yields true",  '=',  someRecursive([4,6,8], val => val > 10));
