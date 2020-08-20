console.log("********** ejercicio 18 *********");

// Write a recursive function that given an array of strings capitalizes
// the first letter of each string in the array
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


function capitalizeFirst(arr){
    if(arr.length === 1) return [(arr[0][0]).toUpperCase().concat(arr[0].substring(1))];
    const remaining = capitalizeFirst(arr.slice(0,-1));
    remaining.push(arr.slice(-1)[0][0].toUpperCase().concat((arr.slice(-1)[0]).substring(1)));
    return remaining;
}


console.log("****** solution 1 ********");
console.log( "Capitalized Array",  '=', capitalizeFirst(['car','taco','banana']) );
