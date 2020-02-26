'use strict';

// Prototypes - when to use???
var arr = ['red', 'green', 'blue']
var lastEl = arr[arr.length - 1] // wouldn't it be easier to just do arr.last? but array object dont have this preprty by default

Object.defineProperty(arr, 'last', {
    get: function() {
        return this[this.length-1]
    }
})
console.log(arr.last)
var arr2 = ['one', 'two', 'three'] // this array doesn't have the last property
console.log(arr2.last) //undefined

//put the new method on the Array.prototype property instead
Object.defineProperty(Array.prototype, 'last', {
    get: function() {
        return this[this.length-1]
    }
})
console.log(arr2.last)

//What is a prototype? An object that exists on every instantiation of an object from a class / Constructor function
var myFunc = function() {}
console.log(myFunc.prototype) //just an empty object here

//OBJECT LITERAL DONT HAVE A PROTOTYPE PROPERTY - ONLY CLASSES DO
var cat = {name:'Fluffy'}
console.log(cat.prototype)

//object literals do have __proto__ properties - the proto property points to the same object that is the classes prototype
console.log(cat.__proto__)

class myClass {
    constructor(prop1, prop2) {
        this.prop1 = prop1 // THESE ARE INSTANCE PROPERTIES, NOT PROTOTYPE PROPERTIES
        this.prop2 = prop2
    }

    printProps() {
        console.log(this.prop1, this.prop2)
    }
}

let instance1 = new myClass('one', 'one')
let instance2 = new myClass('two', 'two')

// Object.defineProperty(myClass.prototype, 'prototypeMethod', {
//     get: function() {
//         return `this is the prototype method ${this.prop1} ${this.prop2}`
//     }
// })
myClass.prototype.prototypeMethod = function() {
    return `this is the prototype method shared by all instances of myClass. The props for this instance are ${this.prop1}, ${this.prop2}`
}

console.log(instance1.prototypeMethod())
console.log(`the value of instance1 __proto__ property is: ${instance1.__proto__}`)
console.log(instance2.prototypeMethod())
console.log(`the value of instance2 __proto__ property is: ${instance2.__proto__}`)

console.log(instance1.__proto__ === instance2.__proto__) 
// the prototype method assiciated with these object instantiations are EXACTLY the same

console.log(myClass.prototype === instance1.__proto__)

//THIS IS PROTOTYPAL INHERITANCE!!


function Dog(name, age) {
    this.name == name
    this.age = age
}
Dog.prototype.color = 'White'

let clyde = new Dog("Clyde", 5)
let delilah = new Dog("Delilah", 7)
console.log(Dog.prototype.color)
console.log(clyde.__proto__.color)

console.log(clyde.color) // this comes from the prototype unless explicitly set
clyde.color = "Beige"
console.log(clyde.color) // now it comes from the newly set property
console.log(clyde.__proto__.color) // this still comes from the prototype

//FIRST, JavaScript looks for property in object, THEN it looks for whether it's prototype has that property
// use obj.hasOwnProperty('propName') to check if it has a property NOT defined in prototype

// Prototypes point to an instance of an object in memory - if you change the prototype, all object
// who inherited their __proto__ values from the original prototype will remain the same,
// but new object instantiations will get the new prototype value

// Prototypal inheritance - prototypes themselves have prototype - at the beginning of the chain is always null
console.log(clyde.__proto__.__proto__) // {} empty object
console.log(clyde.__proto__.__proto__.__proto__) // null