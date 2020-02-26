// convert an object literal to JSON (string representation of a javascript object or Python dictionary)
let car = {
    id:123, 
    style:'convertible'
};
console.log(JSON.stringify(car)); // {"id":123,"style":"convertible"}
//JSON.stringify works for arrays too

//PARSING JSON
let jsonIn = `
[
    {"carId":123},
    {"carId":456},
    {"carId":789}
]
`;
let carIdsObjectLiteral = JSON.parse(jsonIn);
console.log(carIdsObjectLiteral);

//Arrays and iteration
let myArray = [
    {id:1, name:'hi'},
    {id:2, name:'bye'},
    {id:3, name:'hi'}
];
myArray.forEach(obj => console.log(obj));
myArray.forEach((obj, index) => console.log((obj, index)));

//Array filtering with .filter
let salutations = myArray.filter(
    obj => obj.name == 'hi'
);
console.log(salutations); // [{id:1, name:'hi;}, {id:3, name:'hi}]

//Array filtering with .every -> return true if every element of array meets condition, false otherwise
let result = myArray.every(
    obj => obj.id > 1
);
console.log(result); // false

//Locate first match of condition in array with the .find method
let biggestId = myArray.find(
    obj => obj.id > 2
);
console.log(biggestId);
