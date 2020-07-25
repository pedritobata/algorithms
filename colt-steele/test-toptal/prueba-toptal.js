console.log("Simulacro de TOPTAL");
console.log("===================");

//

function solution(A) {
    let smallest = 1;
    const arrSet = new Set(A);
    arrSetSorted = Array.from(arrSet).sort((a,b) => a - b );
    console.log(arrSetSorted);
    for(let i=0; i < arrSetSorted.length; i++){
        if(arrSetSorted[i] < 0) continue;
        if(arrSetSorted[i + 1] - arrSetSorted[i] === 1) continue;
        smallest = arrSetSorted[i] + 1;
        break;
    }
    
    
    return smallest;
}

console.log('solution test: ',solution([1, 3, 6, 4, 1, 2]));