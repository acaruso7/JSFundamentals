// this keyword - refers to the current object context
let obj = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};

console.log(obj.getId());

// call and apply can be used to change the value of this
// use 'call' to apply a new value to this
let newCar = {carId:456};
console.log(obj.getId.call(newCar)); // 456     newCar becomes the new context for this expression

// apply does the same thing as call except you can pass arguments
let applyExample = {
    carId:123, 
    getId: function(prefix) {
        return prefix + this.carId;
    }
};
let newCar2 = 678;
console.log(applyExample.getId.apply(newCar2, ['ID: '])); //ID: 678 newCar2

//bind - makes a copy of the function and changes the context
let newFn = obj.getId.bind(newCar);
console.log(newFn());
