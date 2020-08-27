console.log("********** ejercicio 20 *********");

// Write a recursive function which returns the sum of all even numbers
// in an object that may contain nested objects
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10


function nestedEvenSum(obj){
   
    let objSum = { sum : (obj['sum'] ? obj['sum'] : 0)};
    for(let key in obj){
        if(!isNaN(obj[key]) && key !== 'sum' && obj[key] % 2 === 0){
            objSum['sum'] += obj[key];
            //console.log(objSum);
        }else if(typeof obj[key] === 'object'){
          objSum = Object.assign(obj[key],{ sum : objSum['sum']})
          //console.log(objSum);a
           const acumulado = nestedEvenSum(objSum);
           //console.log('acumulado:',acumulado);
           objSum['sum'] = acumulado['sum'];
        }
       
    }
    return { sum : objSum['sum']};
}

const objeto = {a:1,b:2,c:3};
console.log("****** solution 1 ********");
console.log( "Sum of even numbers",  '=', nestedEvenSum(obj2) );
