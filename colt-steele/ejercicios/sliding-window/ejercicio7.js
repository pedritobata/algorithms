console.log('************* Sliding Window ***********');

// MAX SUBARRAY SUM
// Given a array of integers and a number, write a function wich finds the maximum sum of a subarray 
// with the length passed as a second argument. Each subarray must consist of consecutive elements of
// the original array
// time : O(N)  space: O(1)
// test:
// maxSubarraySum([100,200,300,400],2) rpta 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20],4) rpta 39
// maxSubarraySum([-3,4,0,-2,6,-1],2) rpta 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) rpta 5
// maxSubarraySum([2,3],3) rpta null


console.log('********  Solution 1  ********');
function maxSubarraySum(arr, num){
    if(!arr || arr.length === 0) return 0;
    if(num <= 0 ) return 0;

    let maxSum = 0;
    let currentSum = 0;
    for(let i=0; i< num; i++){
        currentSum += arr[i];
    }
     
    for(let j=num; j < arr.length; j++){
        currentSum = currentSum - arr[j - num] + arr[j];
        if(currentSum > maxSum) maxSum = currentSum;
    }

    return maxSum;
}

console.log('Maxima suma solution 1:', maxSubarraySum([1,4,2,10,23,3,1,0,20],4));

