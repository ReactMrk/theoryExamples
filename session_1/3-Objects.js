
const b = "b";


// Declaration
const anObject = {
    a: "a",
    b
}
console.log("anObject", anObject);

// Nesting
const anotherObject = {
    c: anObject,
    d: 1234
}
console.log("anotherObject", anotherObject);

//Destructuring
const aThirdObject = {
    ...anObject,
    d: anotherObject.d,
    e:4321
}
console.log("aThirdObject", aThirdObject);

//Access
console.log("property with key d", aThirdObject['d']);

//Conditional Chaining
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

//Array deconstruction
const anArray = [1,2,3,4];
const anotherArray = [5,6,7]
const [v1,v2,v3,v4] = anArray;
console.log("value 2 of array", v2);

// Array composition
const aThirdArray = [...anArray, ...anotherArray];
console.log("aThirdArray", aThirdArray);
console.log("concat Array", anArray.concat(anotherArray));
