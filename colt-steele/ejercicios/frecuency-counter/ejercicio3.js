console.log('************* Ejercicio 3 **************');
// FRECUENCY COUNTER
// Given two positive integers, find out if the two numbers have the same frecuency of digits.
// your solution must have the follwing complexities:
// O(N)
// test: 
// sameFrecuency(182, 281)  true
// sameFrecuency(34, 14)  false
// sameFrecuency(3589578, 5879385)  true
// sameFrecuency(22, 222)  false

console.log('*********** Solution 1 **********');

function sameFrecuency(num1, num2){
    const n1 = num1.toString(), n2 = num2.toString();
    if(n1.length !== n2.length) return false;

    const lookup = {};
    for(let i=0; i < n1.length; i++){
        if(!lookup[n1[i]]) lookup[n1[i]] = 1;
        else lookup[n1[i]]++;
    }
//console.log('lookup', lookup);

    for(let i=0; i < n2.length; i++){
        if(!lookup[n2[i]]) return false;
        else lookup[n2[i]]--;
    }

    return true;

}

console.log('Solution 1:', sameFrecuency(22, 222));