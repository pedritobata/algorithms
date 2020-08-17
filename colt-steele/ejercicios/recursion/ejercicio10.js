console.log("********** ejercicio 10 *********");

// Write a function called power which accepts a base and a exponent. The function
// Should return the power of the base to the exponent. This function should mimic
// the functionality of Math.pow() - do not worry about negative bases and exponents

function power(base, exp){
    if(base === 0) return 0;
    //base case
    if(exp === 0) return 1;
   

    // operation
    const result = base * power(base, exp - 1);
    return result;
}

const base = 0,  exp = 0;
console.log("****** solution 1 ********");
console.log("base", base, "^", exp, "=", power(base, exp));