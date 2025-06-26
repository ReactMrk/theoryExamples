// ----- Declaration ---
console.log("----- Declaration ---");
const anArray = [1,2,3,4];

console.log("anArray", anArray);


// ----- Access ---
console.log("----- Access ---");

console.log("first third position", anArray[2]);
console.log("first third position", anArray["2"]);


// ----- Methods & Properties---
console.log("----- Methods & Properties ---");

console.log("Length", anArray.length);
console.log("Map", anArray.map(v => v+1));
console.log("Find", anArray.find(v => v===3))
console.log("Filter", anArray.filter(v => v===3))
