// CodePen Ref: https://codepen.io/ReactMrk/pen/pvJGwJG
// ----- Declaration ---
console.log("----- Declaration ---");
const anArray = [1,2,3,4];

console.log("anArray", anArray);


// ----- Access ---
console.log("----- Access ---");

console.log("first third position", anArray[2]);
console.log("first third position", anArray["2"]);


// ----- Array composition ---
console.log("----- Array composition ---");
const anotherArray = [5,6,7]
const aThirdArray = [...anArray, ...anotherArray];

console.log("aThirdArray", aThirdArray);
console.log("concat Array", anArray.concat(anotherArray));


// ----- Array deconstruction ---
console.log("----- Array deconstruction ---");
const [v1,v2,v3,v4] = anArray;

console.log("value 2 of array", v2);


// ----- Methods & Properties---
console.log("----- Methods & Properties ---");

console.log("Length", anArray.length);
console.log("Find", anArray.find(v => v===3))
console.log("Map", anArray.map(v => v+1));
console.log("Filter", anArray.filter(v => v===3))
