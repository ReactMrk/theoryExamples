// CodePen Ref: https://codepen.io/ReactMrk/pen/RNPvgWg
// ----- var vs let and scopes ---
console.log("----- var vs let and scopes ---");
var funcs = [];
// let's create 3 functions
// change the "i" declaration from var to a let and see what happens
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

// Closure
const someFunc = () => {
    const aVariable= "aVariable";
    console.log("this is aVariable", aVariable);
    return aVariable;
}

console.log(someFunc());