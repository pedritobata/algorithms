// Crear una funcion que haga un conteo regresivo
function countdown(from){
    // Base case
    if(from <= 0){
        console.log("All done!");
        return;
    }
    console.log(from);
    countdown(--from);
}

console.log('********* COUNTDOWN ************');
countdown(5);

// Crear una funcion recursiva que sume los numero enteros desde un numero dado
// hasta 1
function sumRange(num){
    // Base case
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}


console.log('********* SUM RANGE ************');
let num = 5;
console.log('Suma desde', num,'hasta 1:', sumRange(num));

console.log('********* FACTORIAL ************');
function factorial(num){
    //Base case
    if(num === 1) return 1;

    return num * factorial(num - 1);
}
num = 6;
console.log('Factorial de ',num, 'es:', factorial(num) );


console.log('********* HELPER METHOD RECURSION ************');
// Crear una funcion recursiva que reciba un arreglo de numeros enteros y
// devuelva un arreglo con los numero impares que encuentre en ese arreglo
function collectOddValues(arr){//esta es una funcion Helper. La verdadera recursiva está dentro de ella
    let odds = [];//esta variable se declara fuera de la funcion recursiva sino cada vez se reiniciaria en vacio
    function collectOdds(newArr){
        if(newArr.length === 0) return;
        if(newArr[0] % 2 !== 0){
            odds.push(newArr[0]);
        }
        collectOdds(newArr.slice(1));
    }
    collectOdds(arr);
    return odds;
}

let arr = [1,2,3,4,5,7,10,11];
console.log('Arreglo impares:', collectOddValues(arr));

console.log('********* PURE RECURSION ************');
// El mismo ejemplo anterior pero sin usar un helper method para usar la variable odds afuera de
// la funcion recursiva
function pureRecursion(arr){
    let temp = [];
    if(arr.length === 0){
        return temp;
    }
    if(arr[0] % 2 !== 0){
        temp.push(arr[0]);
    }
    temp = temp.concat(pureRecursion(arr.slice(1)));
    return temp;
}

arr = [1,2,3,4,5,7,10,11];
console.log('Arreglo impares usando Pure Recursion:', pureRecursion(arr));

console.log('********* Ejercicio 16 :  is Palindrome ************');
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// Usar RECURSION!!!
function isPalindrome(word){
    // add whatever parameters you deem necessary - good luck!
    
    // Descartamos las palabras que no aplican de arranque a ser palindromos
    if(!word || word.length % 2 === 0) return false;

    //Base case
    if(word.length === 1) return true;

    //logica
    if(word[0] === word[word.length - 1]){
        return isPalindrome(word.slice(1, word.length - 1));
    }else{
        return false;
    }
}
let word = 'amanaplanacanalpandemonium';
console.log(`isPalindrome(${word})`, isPalindrome(word));
