// RADIX SORT

//helper methods
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

//console.log(getDigit(125,3));

function digitCount(num){
    return Math.floor(Math.log10(num)) + 1;
}

//console.log(digitCount(12501254));

function maxDigitCount(nums){
    let maxDigits = - Infinity;
    for(let i=0; i < nums.length; i++){
        maxDigits = Math.max(digitCount(nums[i]), maxDigits);
    }
    return maxDigits;
}
//console.log(maxDigitCount([12501254,12,3,342,4554,3,2222222222]));

function radixsort(nums){
    const maxDigits = maxDigitCount(nums);
    for(let i=0; i < maxDigits; i++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let j=0; j < nums.length; j++){
            const digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixsort([23,345,5467,12,2345,9852]));
