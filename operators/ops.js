// var year = 1975;
// console.log(++year); //1976 (incremented before expression)

// year = 1975;
// console.log(year++); //1975 (incremented after expression)
// console.log(year); //1976

let year = 2000;
let year2 = 1900;
console.log(year && year2); //year2 gets returned if both are 'truthy'
console.log(year || year2); //year gets returned if either value is 'truthy'

let userSettings = null;
let defaultSettings = {name:'Default'};
console.log(userSettings || defaultSettings); // returns {name:'Default'}


// Conditional (switch) operator
var foo = 3;
var result = (foo > 5) ? true : false;
console.log(result);