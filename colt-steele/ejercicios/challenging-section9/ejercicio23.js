console.log("********** ejercicio 23 *********");

// Write a function which accepts an object and returns an array whith
// all the values of the object that have type of string

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
function collectStrings(obj){
   
    let arrStr = [];
   for(let key of Object.keys(obj)){
        if(typeof obj[key] === 'string'){
            arrStr.push(obj[key]);
        }else if(typeof obj[key] === 'object'){
            arrStr = arrStr.concat(collectStrings(obj[key]));
        }
   }

   return arrStr;
}

console.log("****** solution 1 ********");
console.log( "collectStrings",  '=', collectStrings(obj) );
