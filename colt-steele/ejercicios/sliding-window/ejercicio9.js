console.log('********** Ejercicio 9 ***********');

// findLongestSubstring
// Write a function which accepts a string and returns the length of the longest
// substring with all distinct characters.
// time :  O(N)
// test:
// findLongestSubstring('') 0 
// findLongestSubstring('rithmschool') 7
// findLongestSubstring('thisisawesome') 6 
// findLongestSubstring('thecatinthehat') 7 
// findLongestSubstring('bbbbbb') 1  
// findLongestSubstring('longestsubstring') 8 
// findLongestSubstring('thisishowwedoit') 6  

const c = console.log;

function findLongestSubstring(str){
    if(!str) return 0;
    let longest = 0;
    let seen = {};
    let start = 0;
    for(let i=0; i < str.length; i++){
        let char = str[i];
       
         if(seen[char]) {
            //c('seen', seen);
            // c('i=',i);
            // c('start',start);
            start = seen[char];
         }

         longest = Math.max(longest, i - start + 1);

         seen[char] = i + 1;

    }
  

    return longest;
}


console.log('********** Solucion 1 ***********');
console.log(findLongestSubstring('thisishowwedoit'));