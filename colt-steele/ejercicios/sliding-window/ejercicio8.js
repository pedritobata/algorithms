console.log('********** Ejercicio 8 *************');


// Min Subarray length
//Write a function wich accepts two parameters , an array of positive integers and a positive integer
//Return the minimal length of a contiguous subarray of which the sum is greater than or equa to the
//number passed in as second parameter
// time: O(N)   space: O(1)
//test:
// minSubarrayLen([2,3,1,2,4,3],7)  rpta 2
// minSubarrayLen([2,1,6,5,4],9)  rpta 2
// minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19],52)  rpta 1
// minSubarrayLen([1,4,16,22,5,7,8,9,10],39)  rpta 3
// minSubarrayLen([1,4,16,22,5,7,8,9,10],55)  rpta 5
// minSubarrayLen([4,3,3,8,1,2,3],11)  rpta 2
// minSubarrayLen([1,4,16,22,5,7,8,9,10],95)  rpta 0


function minSubarrayLen(arr, num){
    if(!arr || arr.length === 0 || num <=0) return 0;
    let start = 0, end = 0, suma = 0;
    let minLen = Infinity;
    while(start < arr.length){
        if(suma < num && end < arr.length){
            suma += arr[end++];
        }else if(suma >= num){
            minLen = Math.min(minLen, end - start);
            suma -= arr[start];
            start++;
        }else{
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log('minSubarrayLen:', minSubarrayLen([2,3,1,2,4,3],7));
