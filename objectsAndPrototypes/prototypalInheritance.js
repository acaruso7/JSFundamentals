function Animal(voice) {
    this.voice = voice || 'Grunt'
}
Animal.prototype.speak = function() {
    console.log(this.voice)
}

function Cat(name, color) {
    Animal.call(this, 'Meow') // same as super()   //# 1 important
    this.name = name
    this.color = color
}
Cat.prototype = Object.create(Animal.prototype) // #2 important
Cat.prototype.constructor = Cat; // #3 important
let fluffy = new Cat("Fluffy", "White");
fluffy.speak()


//CREATING PROTOTYPES WITH CLASSES
class Mammal {
    constructor(voice) {
        this.voice = voice || "Grunt"
    }
    speak() {
        console.log(this.voice)
    }
}

class Dog extends Mammal {
    constuctor(name, color) {
        super('Woof'); //must instantiate 'voice' parameter of parent class
        this.name = name; 
        this.color = color;
    }
}

let chipper = new Dog("Chipper", "Brown")
chipper.speak()