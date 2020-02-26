//Error Handling
try {
    let car = newCar; //throws reference error
} catch(error) {
    console.log(`Error: ${error}`);
} finally {
    console.log('this always executes, regardless of whether an error was hit');
}

//Developer defined errors
//use throw new Error('some customer error message')
try {
    var x;
    if (typeof(x)=='undefined') {
        throw new Error('x is undefined'); //can also create custom Error objects that inherit from Error
    }
} catch(error) {
    console.log(error);
}