// ----- Types ----
console.log("----- Types ----");
const someString = "Hello World";
const aNumber = 12345;
const aBoolean = false;

console.log(someString);
console.log(aNumber);
console.log(aBoolean);


// ----- Mutability ----
console.log("----- Mutability ----");
let someMutableString = "initialValue";
// using var would produce the same effect

console.log(someMutableString);
someMutableString = "newValue";
console.log(someMutableString);