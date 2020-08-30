
// Merge sort algorithm

// helper, function merge
function merge(arr1, arr2){
    let i = 0, j = 0;
    const result = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}
let arr1 = [2];
let arr2 = [4];
console.log(merge(arr1, arr2));

function mergesort(arr){
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergesort(arr.slice(0,mid));
    const right = mergesort(arr.slice(mid));

    return merge(left,right);
}

console.log(mergesort([100,1,6,3,90,12,18,0]));