// BOM - Browser Object Model - can change URL, etc
// global window object - can access from anywhere
// important window properties
console.log(window.document); // HTML markup
console.log(window.document.URL);
console.log(window.location); // host, port, protocol, etc
console.log(window.console);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.pageXOffset); //scrollbar positioning
console.log(window.pageYOffset);

//create a variable without using let, const, var, this, etc . .  it gets stored in window object
year = 1968;
console.log(window.year); //MODULES ARE NOT PLACED ON GLOBAL WINDOW OBJECT - must use let, const, or var to declare at module level

//important window methods
// .alert
// .back //browse backward
// .confirm