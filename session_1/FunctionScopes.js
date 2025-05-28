
function doSomething() {
    console.log('Hello')
}

const doSomething2 = function () {
    console.log('Hello2')
}

const doSomething3 = () => {
    console.log('Hello3')
}




doSomething();
doSomething2();
doSomething3();


// var vs let
var funcs = [];
// let's create 3 functions
// the "i" var to a let and see what happens
for (var i = 0; i < 3; i++) {
    // and store them in funcs
    funcs[i] = function() {
        // each should log its value.
        console.log("My value: " + i);
    };
}
for (var j = 0; j < 3; j++) {
    // and now let's run each one to see
    funcs[j]();
}
