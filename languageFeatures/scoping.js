// const vs let vs var
// const cannot be reassigned altogther, but if it's an object it's properties can be modified
const obj = {
    test1: 'hi',
    test2: 'bye'
};

// obj = 'hi'; //error
obj.test2 = 'hi'; //this works
console.log(obj);

// console.log(Object.getOwnPropertyDescriptor(obj, 'test2'))
// Object.defineProperty(obj, 'test', {writable:false})
// obj.test2 = 'this fails'
// console.log(obj)


//let is block scoped (only within curly braces) - must be initialized, can't just be declared
function blockScoping() {
    if (1 == 1) {
        let i = 'hi';
        console.log(i);
    };
    // console.log(i); //error
};
blockScoping();
//var is function scoped - can be decalred but not initialized (it will be undefined)

function functionScoping() {
    var i;
    console.log(i); //undefined
    i = 20;
    console.log(i);
}
functionScoping();