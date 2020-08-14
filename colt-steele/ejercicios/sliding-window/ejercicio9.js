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

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
         
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    c('seen:',seen);
    return longest;
  }


console.log('********** Solucion 1 ***********');
console.log(findLongestSubstring('longestsubstring'));