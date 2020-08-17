console.log("********** ejercicio 14 *********");

// Write a recursive function which accepts a number and returns the nth number in
// the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous
// two numbers
// 1,1,2,3,5,8,13,21....

function fibonacci(pos){
   if(pos === 1 || pos === 2) return 1;
    return fibonacci(pos - 1) + fibonacci(pos - 2);
}

const pos = 28;
console.log("****** solution 1 ********");
console.log("position", pos, 'en fibonacci',  "=", fibonacci(pos));