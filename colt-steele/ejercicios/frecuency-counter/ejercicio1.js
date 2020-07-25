// Anagramas - Frequency counter
//ejemplos :  
//validAnagram('','') : true
//validAnagram('aaz','zza') : false
//validAnagram('rat','car') : false
//validAnagram('anagram','nagaram') : true

//Mi solucion  -- la solucion de colt estás mas brava!!
function validAnagram(str1, str2){
    //validacion primera
    if(str1.length !== str2.length){
        return false;
    }

    const anagram1 = {};
    const anagram2 = {};
    // pasamos el primer string a tabla de frecuencias(un objeto)
    for(let char of str1){
        anagram1[char] =  (anagram1[char] || 0) + 1;
    }
    // pasamos el segundo string a tabla de frecuencias(un objeto)
    for(let char of str2){
        anagram2[char] =  (anagram2[char] || 0) + 1;
    }

    console.log("Anagrama1", anagram1);
    console.log("Anagrama2", anagram2);

    //verificamos que los dos objetos sean iguales en keys y values
    for(let char in anagram1){
        if(anagram1[char] !== anagram2[char]){
            return false;
        }
    }

    return true;

}

console.log("Ejercicio 1");
console.log("Los strings son anagramas?", validAnagram('rat','car'));


/******* SOLUCION 2 ***************/
function validAnagram2(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    const lookup = {};
    for(let i=0; i < str1.length; i++){
        const letter = str1[i];
        if(lookup[letter]){
            lookup[letter]++; 
        }else{
            lookup[letter] = 1;
        }
    }

    for(let i=0; i < str2.length; i++){
        const letter = str2[i];
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter]--;
        }
    }

    return true;
}

let cad1 = "anagrams";
let cad2 = "maganarsa";
console.log('******* SOLUCION 2 ***************');
console.log('Los textos', validAnagram2(cad1,cad2)? '': 'NO', 'son anagramas');