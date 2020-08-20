const c = console.log;
c('Repaso random');

// paso de variables by Reference abd by Value

const primitives = ['perico', 1,2];

let value1 = primitives[0];

c('value1', value1);

primitives[0] = 'los palotes';
c('value1', value1); // el valor al que apuntaba value1 desde el comienzo persiste!!

const objetos = [{name: 'perico'},{name:'Nandinho'}];
value1 = objetos[0];
objetos[0] = {name:'Ludwing'};
c('value1', value1); // el valor al que apuntaba value1 desde el comienzo persiste tambien!!
//lo cual es logico porque value1 se quedó apuntando a {name: 'perico'} y objetos[0] ahora apunta a {name:ludwing}

//la cosa cambia cuando tenemos una variable afuera que se pasa al arreglo 
let fer = {name:'fer'};
const objetos2 = [fer, {name: 'rapha'}];
let person = objetos2[0];
c('person', person);
fer.name = 'nandinho';
c('person', person);

// Special comparisons:

c("NaN === NaN",NaN === NaN);
c("NaN == NaN",NaN == NaN);
c("undefined === undefined",undefined === undefined);
c("null === null",null === null);
c("null === undefined",null === undefined);
c("null == undefined",null == undefined);




