// ----- Declaration ---
console.log("----- Declaration ---");
const b = "b";
const anObject = {
    a: "a",
    b
}

console.log("anObject", anObject);


// ----- Nesting ---
console.log("----- Nesting ---");
const anotherObject = {
    c: anObject,
    d: 1234
}

console.log("anotherObject", anotherObject);


// ----- Destructuring ---
console.log("----- Destructuring ---");
const aThirdObject = {
    ...anObject,
    d: anotherObject.d,
    e:4321
}

console.log("aThirdObject", aThirdObject);


// ----- Access ---
console.log("----- Access ---");

console.log("property with key d", aThirdObject.d);
console.log("property with key d", aThirdObject['d']);


// ----- Optional Chaining ---
console.log("----- Optional Chaining ---");
const someObject = {
    a: "someVal",
    b: {
        c: "someOtherValue"
    }
}

console.log("access result", someObject.b.c);
someObject.b = null;
// console.log("access after mutation", someObject.b.c);
// TypeError: Cannot read properties of null (reading 'c')
console.log("access after mutation", someObject?.b?.c);
