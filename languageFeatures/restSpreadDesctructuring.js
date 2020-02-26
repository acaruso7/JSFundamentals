//Rest parameters - allows storing multiple parameters in a single array

function sendCars(day, ...allCarIds) { //like *args in Python - take an array of arbitrary length as input and parse elements as args
    allCarIds.forEach(id => console.log(id));
}

sendCars('Monday', 100,200,300);

//must always list rest parameter last if the function takes other non rest parameters
// function sendCars(...allCarIds, day) { //error! rest parameter must be last
//     allCarIds.forEach(id => console.log(id));
// }

//Spread operator - opposite of Rest
function startCars(car1, car2, car3) {
    console.log(car1, car2, car3);
}
let nums = [1,2,3,4];
console.log("START CARS");
startCars(...nums); //instead of putting ... in function definition, it is put in function call to refer to list of 
//this works for strings too because they are also iterables . . . value at each index of string gets inputted into function


// Destructuring arrays
let ids = [1, 2, 3];
let [id1, id2, id3] = ids;
console.log(id1);
console.log(id2);

// Rest parameters can be used in combination with destructuring
let [id, ...remainingIds] = ids;
console.log(id);
console.log(remainingIds);

// can also use a comma to skip elements in destructuring
let [, ...remaining] = ids;
console.log(remaining); // [2, 3]

// DESTRUCTURING OBJECTS - use curly braces instead
let car = {num:5000, style:'convertible'};
let {num, style} = car; //only the values of the objects are stored, not the keys
console.log(num, style);


