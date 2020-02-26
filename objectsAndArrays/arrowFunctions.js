// Arrow functions
let getId = () => 123; // functionName = (parameters) => return expression
console.log(getId());

let getId2 = prefix => prefix + 123; // parentheses can be excluded if there is only one argument
console.log(getId2('ID: '));

let getId3 = (prefix, suffix) => prefix + 123 + suffix; // parentheses can be excluded if there is only one argument
console.log(getId3('ID: ', '!'));

let complexArrowFn = (arg1, arg2, arg3) => {
    //can have an arbitrary amount of code in here
    if (arg1==1) {
        return arg1;
    } else {
        return arg1 + arg2;
    }
};

// Arrow functions don't have their own 'this' value --> 'this' refers to the enclosing context