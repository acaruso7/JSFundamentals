// typeof always returns a string

typeof(1); // 'number'
typeof(true); // 'boolean'
typeof('Hello'); // 'string'
typeof(function(){}); // 'function'
typeof({}); // 'object'
typeof(null); // 'object'
typeof(undefined); // 'undefined'
typeof(NaN); // 'number'


//convert to string
foo.toString();

// convert string to integer
Number.parseInt('55');

// convert string to number
Number.parseFloat('50.99');

// extra characters
console.log(Number.parseInt('55abc')); //returns 55
console.log(Number.parseInt('abc55')); // returns NaN