console.log("********** ejercicio 11 *********");

// Write a function factorial which accepts a number and returns the factorial of that number
// . A factorial is the producti of an integer and all the integers below it
// factorial of 0 is 1

function factorial(number){
    if(number == 0) return 1;

    return number * factorial(number - 1);
}

const number = 7;
console.log("****** solution 1 ********");
console.log("factorial", number, "=", factorial(number));