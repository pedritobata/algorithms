// Crear una funcion que reciba un arreglo de numeros y un numero entero "n" que indique cuantos
// numeros consecutivos se deben sumar.
// el resultado debe ser la maxima suma que se obtenga con n enteros consecutivos

console.log('******** NAIVE SOLUTION ***********');
function maxSubarraySum(arr, num){
    if(num <= 0 || num > arr.length){
        return 0;
    }
    let max = -Infinity;
    for(let i=0; i < arr.length - num + 1; i++){
        let sum = 0;
        for(let j=0; j < num ; j++){
            sum += arr[i + j];
        }
        if(sum > max){
            max = sum;
        }
    }
    return max;
}

console.log('Maxima suma:', maxSubarraySum([2,2,1,3,4,6,7], 3));//17



console.log('******** SOLUTION 1 ***********');
function maxSubarraySum2(arr, num){
    if(arr.length < num) return 0;
    let maxSum = 0;
    let temp = 0;
    for(let i=0; i < num; i++){
        temp += arr[i];
    }
    maxSum = temp;
    for(let j=num; j < arr.length; j++){
        temp = temp - arr[j - num] + arr[j];
        maxSum = Math.max(temp, maxSum);
    }
    return maxSum;
}


console.log('Maxima suma 2:', maxSubarraySum([2,2,1,3,4,6,7], 3));//17