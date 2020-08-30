console.log("********** ejercicio 22 *********");

// Write a function which takes in an object and find all of the values which
// are numbers and converts them to strings.
// Recursion could be a good solution.
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj){
   
    for(let key of Object.keys(obj)){
        if(typeof obj[key] === "number"){
            obj[key] = obj[key] + '';
        }else if(typeof obj[key] === 'object'){
            obj[key] = stringifyNumbers(obj[key]);
        }
    }
    
   return obj;
}

console.log("****** solution 1 ********");
console.log( "stringifyNumbers",  '=', stringifyNumbers(obj) );
