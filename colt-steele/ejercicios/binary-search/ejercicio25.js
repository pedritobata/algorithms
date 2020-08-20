console.log("********** ejercicio 25 *********");

// Write a function which accepts a sorted array and a value and returns
// the index at wich the value exists. Otherwise return -1
// binarySearch([1,2,3,4,5],6)
// binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,98,99],10)

function binarySearch(arr, num){
    if(!arr) return -1;
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        const middle = Math.floor((end - start + 1)/2);
        if(num === arr[middle]){
            return middle;
        }else if(num < arr[middle]){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
    }

    return middle;
}


console.log("****** solution 1 ********");
console.log( "binarySearch",  '=', binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,98,99],10) );
