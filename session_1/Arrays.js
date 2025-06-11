// Declaration
const anArray = [1,2,3,4];
console.log("anArray", anArray);


// Access
console.log("first third position", anArray[2]);
console.log("first third position", anArray["2"]);


// Methods
console.log("length", anArray.length);
// Transform without mutation
console.log("map", anArray.map(v => v+1));
console.log("notMutatedArray", anArray);
// Transform with mutation
console.log("push", anArray.push(5));
console.log("mutatedArray", anArray);
console.log("pop", anArray.pop());
console.log("restoredArray", anArray);
