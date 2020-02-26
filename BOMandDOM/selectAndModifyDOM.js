//document object
//properties:
console.log(document.body); //returns HTML markup
console.log(document.forms); //returns HTMLCollection - this is an array of HTML elements that can be access via indexes
console.log(document.links); //returns HTMLCollection

//methods
//createElement()
//createEvent()
//getElementById()
//getElementsByClassName() //returns all DOM elements with a given class
//getElementsByTagName()

//events
//onload
//onclick
//onkeypress

//SELECTING DOM ELEMENTS - gets the entire element - must be indexed into to get specific parts
let myFirstPara = document.getElementById('firstPara');
console.log(myFirstPara);

let parasWithClass = document.getElementsByClassName('myclass'); //this returns an HTMLCollection
let secondPara = parasWithClass[0];
let thirdPara = parasWithClass[1];
console.log(secondPara);
console.log(thirdPara);

let pElements = document.getElementsByTagName('p');
console.log(pElements);


//MODIFYING DOM ELEMENTS - FIRST SELECT THE ELEMENT
myFirstPara.textContent = 'Modified first DOM element';
myFirstPara.style.color = 'blue';
myFirstPara.setAttribute('name', 'modifiedNameAttribute');
myFirstPara.classList.add('modifiedClassOfDOMElement');