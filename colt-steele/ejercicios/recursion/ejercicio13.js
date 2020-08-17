console.log("********** ejercicio 13 *********");

// Write a function called power which accepts a base and a exponent. The function
// 
//

function recursiveRange(num){
  if(num === 0) return 0;
  return num + recursiveRange(num - 1);
}

const num = 10;
console.log("****** solution 1 ********");
console.log("recursive range sum of base", "=", recursiveRange(num));