//IIFE pattern - Immediately Invoked Function Expression
(function() {
    console.log('IIFE pattern');
})(); // by putting the function and it's body in parentheses it gets immediately invoked

let app = (function(){
    let carId = 123;
    console.log('IIFE pattern assign to variable');
    return {};
})();

//CLOSURES - any variable decalred in the IIFE will persist, along with any function. useful for privatizing data
//Out function must return a reference to the inner function
let closure = (function(){
    let carId = 123;
    let getId = function() {
        return carId;
    };
    return {
        getId: getId
    };
})();
console.log(closure.getId());

// Udacity closure example
let rate = function() {
    var time = 0;
    return function() {
        time += 50
        console.log(time)
    }
}

let limiter = rate() // return the inner function; time = 0
limiter() // increment time by 50; time = 50
limiter() // incremement time by 50; time = 100