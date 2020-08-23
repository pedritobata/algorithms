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
   
    const objSum = { sum : (obj['sum'] ? obj['sum'] : 0)};
    for(let key in obj){
        if(!isNaN(obj[key]) && obj[key] !== 'sum'){
            objSum['sum'] += obj[key];
        }else if(typeof obj[key] === 'object'){
            nestedEvenSum(Object.assign(objSum,obj[key]));
        }
        console.log(obj[key]);
    }
    return objSum;
}

const objeto = {a:1,b:2,c:3};
console.log("****** solution 1 ********");
console.log( "Sum of even numbers",  '=', nestedEvenSum(obj1) );
