// Constructor functions - used to instantiate new objects
//convention - always start with capital letter

function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log('start: ' + this.carId);
    };
}
let car = new Car(123);
console.log(car.carId);
car.start();

//PROTOTYPES - a special property that every object has to prevent reinstnatiating attributes for each new instance of an object
// take the above example - if 100 Car() objects are instantiated, then 100 different start methods will also be created
// this take up a lot of memory - use protypes to prevent this

function Car2(id) {
    this.carId = id;
}
Car2.prototype.start = function() { // this method is only created once but used for every instance of Car2
    console.log('start: ' + this.carId);
};
let prototypedCar = new Car2(567);
prototypedCar.start();

//Expanding object using prototypes
//Any existing class (constructor function) can be extended with new methods such that any instatiation (object) can access those methods
String.prototype.hello = function() { //String is a built-in class (constructor function) - it can be extended with new methods
    return this.toString() + ' hello';
};
console.log('foo'.hello()); //any string now has access to this method hello()
