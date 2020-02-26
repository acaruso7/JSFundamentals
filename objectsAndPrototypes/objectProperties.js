'use strict';

// get propertyDescriptor for object literal property
var cat = {
    name:'Fluffy',
    age:5
}

console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
// { value: 'Fluffy',
//   writable: true,
//   enumerable: true,
//   configurable: true }

//writeable attribute - defined whether property value can be changed
Object.defineProperty(cat, 'name', {writable:false})
// cat.name = 'New Name' // Error: property is no longer mutable !!!!! ERROR WILL ONLY BE THROWN IN STIRCT MODE !!!!!

cat.fullName = {first: 'Alex', last: 'Caruso'}
cat.fullName.first = 'New First Name' // this works because fullName is just pointing to another object literal that is still writeable
console.log(Object.getOwnPropertyDescriptor(cat.fullName, 'first'))
// this behavior can be prevented with Object.freeze(cat.name) - propogates property descriptor attributes to all child objects


// ENUMERABLE ATTRIBUTE
//for ... in loop -- use to loop over object properties
for (let propertyName in cat) {
    console.log(propertyName)
}
// looping over objects can be preventing by making the enumerable property false
Object.defineProperty(cat, 'fullName', {enumerable:false})
console.log(Object.getOwnPropertyDescriptor(cat, 'fullName'))
for (let prop in cat) { //fullName will no longer exist in Object.keys() so it will be skipped in loop
    console.log(prop)
}

//view object keys as array
console.log(Object.keys(cat));

//non-eumerable props wont serializing the whole object literal to JSON
console.log(JSON.stringify(cat)) 

// CONFIGURABLE PROPERTY - 'locks down' properties property changes, prevents deletion of property
Object.defineProperty(cat, 'age', {configurable:false}) //now color's properties can't be modified
// Object.defineProperty(cat, 'age', {enumerable:false}) // Error
// Now it can't be changed back to configurable!
// Object.defineProperty(cat, 'age', {configurable:true}) //Error
//age property can't be deleted now either
// delete cat.age // error
//can still change the writable attribute