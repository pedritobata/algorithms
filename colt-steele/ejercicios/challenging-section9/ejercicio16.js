console.log("********** ejercicio 16 *********");

// Write a recursive function which returns true if the string passed to it is
// a palindrome(reads the same forward and backwards). Otherwise return false
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


function isPalindrome(str){
  if(!str) return true;
  return (str[0] === str[str.length - 1]) && isPalindrome(str.slice(1,-1));
}

const str = "amanaplanacanalpanama";
console.log("****** solution 1 ********");
console.log( "'" + str + "'", 'is Palindrome',  '=', isPalindrome(str));
