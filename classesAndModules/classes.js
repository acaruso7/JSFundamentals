// classes are an alternative way of defining object templates to object constructor functions

class Car {
    constructor(id) {
        this.id = id;
    }
    identify() { // dont need function keyword for class methods
        return `Car ID: ${this.id}`;
    }
}
let car = new Car(123);
console.log(car.identify());

//INHERITANCE
class Vehicle {
    constructor() {
        this.type = 'car';
    }
    start() {
        return `Starting ${this.type}`;
    }
}

class ChildCar extends Vehicle { //syntax: class Child extends Parent
    constructor() {
        super(); // THIS IS REQUIRED - must call parent class constructor before adding additional items in subclass constructor
    }
    start() {
        return 'in Car start' + super.start(); // this is polymorphism - parent class methods with same name can be overwritten
    }
}
let inheritedCar = new ChildCar;
console.log(inheritedCar.type);
console.log(inheritedCar.start());