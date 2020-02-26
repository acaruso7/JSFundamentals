//Promises
//a Promise is an object returns from an asynchronous function
var promise = new Promise(
    function(resolve, reject) { //resolve and reject are callback functions
        setTimeout(resolve, 100, 'someValue'); //someValue is the promise value that gets returns when the promise is resolved or rejected
    } //can also call reject here - then the promise status will be 'rejected' after 100 milliseconds elapse
);
console.log(promise); //returns Promise {<pending>} --> why is it pending? 
//because at the time of this console.log call, the 100 milliseconds from the setTimeout function haven't elapsed yet

//possible states of a promise: pending, resolved, rejected

setTimeout(function() {
    console.log(promise);
}, 200); //the promise status will be resolved when this finished executing


//SETTLING A PROMISE AND WORKING WITH IT'S VALUE --> use promise.then()
// .then() takes two functions as arguments - the first will execute if it's resolved, the second will execute if there's an error
promise.then(
    value => console.log(`fulfilled: ${value}`),
    error => console.log(`error: ${error}`)
);

//using .then without arrow functions
promise.then(
    function(value) {
        console.log(value);
    },
    function(error) {
        console.log(error);
    }
);
