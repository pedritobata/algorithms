console.log("Evaluacion de TOPTAL");
console.log("===================");

console.log("***********Pregunta 1*************");
// ABCDDDEFG
function solution(S, K) {

    const compress = (arr) => {
        
        let result = arr[0] === arr[1] ? '': arr[0];
        let count = 1;
        for(let i=0; i < arr.length ; i++){
            if(arr[i] !== arr[i + 1]){
                result = result.concat(count <= 1 ? '' : (count + arr[i]));
                count = 1;
            }else{
                count++;
            }
        }
        return result;
    }
    console.log('compress',compress(S));

    let minLength = S.length;
   
    for(let i=0; i < S.length; i ++){
        let temp = S.slice(0,i).concat(S.slice(i + K));
       // console.log('slice',S.slice(i, i + K), S.slice(K));
        if(compress(temp).length < minLength){
            minLength = compress(temp).length;
        }
    }

    return minLength;
}


console.log("Solucion Pregunta 1:" , solution('ABCDDDEFG', 2));

/////////////////////////////////////////////////////

console.log("***********Pregunta 2*************");











/////////////////////////////////////////////////////
console.log("***********Pregunta 3*************");