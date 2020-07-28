console.log('*********** Ejercicio 6 *************');


// IS SUBSEQUENCE
// Write a funtion wich takes in two strings and checks whether the characters in the first string form
// a subsequence of the characters in the second string. In other words, the function should check whether the 
// characters in the first string appear somewhere in the second string, WITHOUT their order changing
// restrictions:  
// time: O(N + M)
// space: O(1)
// test:
// isSubsequence('hello', 'hello world');  true
// isSubsequence('sing', 'sting');  true
// isSubsequence('abc', 'abracadabra');  true
// isSubsequence('abc', 'acb');  false, order matters!

console.log('********* isSubsequence Solution 1 **************');

function isSubsequence(str1, str2){
    if(str1.length > str2.length) return false;
    let lookupIndex = 0;
    for(let i=0; i < str2.length; i++){
        if(lookupIndex >= str1.length) return true;
        if(str1[lookupIndex] === str2[i]){
            lookupIndex++;
        }
    }
    if(lookupIndex < str1.length) return false;
    else return true;
}

console.log('isSubsequence solution 1:', isSubsequence('abc', 'acb'));