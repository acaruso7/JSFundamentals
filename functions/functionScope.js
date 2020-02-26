// function startCar(carId) {
//     let message = 'starting . . .';
// }
// startCar(123);
// console.log(message); // reference error - message is scoped in startCar

// this is a closure - message is defined in parent, so no reference error
function startCar(carId) {
    let message = 'Starting . . .';
    let startFn = function turnKey() {
        console.log(message);
    };
    startFn();
}
startCar(123);


function startCar2(carId) {
    let message = "Starting . . .";
    let startFn = function turnKey() {
        let message = "Override";
        console.log(message);
    };
    startFn();
    console.log(message); //Starting . . .
}
startCar2()