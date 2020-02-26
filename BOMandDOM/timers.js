// Timers - fire asyncronously
let timeoutId = setTimeout( function() {
    console.log('1 second passed');
}, 1000);

//cancel timeouts with clearTimeout
// clearTimeout(timeoutId);


//use setInterval to repeatedly fire a function
let intervalId = setInterval( function() {
    console.log('1 second passed');
}, 1000);
//cancel with clearInterval
clearInterval(intervalId);