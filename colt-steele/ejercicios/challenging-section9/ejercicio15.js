console.log("********** ejercicio 15 *********");

// Write a recursive function which accepts a string and 
// returns a new string in reverse
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'


function reverse(str){
  if(!str) return '';

  return str.charAt(str.length - 1).concat(reverse(str.slice(0, -1)));
}

const str = "rithmschool";
console.log("****** solution 1 ********");
console.log( "'" + str + "'", 'reversed',  '=', reverse(str));

// pruebas con substring solo porque estaba viendo la documentacion de MDN
const str2 = "perico";
console.log('1',str2.substring(-5));
console.log('2',str2.substring(-5, -3));
console.log('3',str2.substring(50, -3));
console.log('4',str2.substring(3, -3));