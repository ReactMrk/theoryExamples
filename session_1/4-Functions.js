// ----- Function declarations ---
console.log("----- Function declarations ---");
function doSomething() {
    console.log('Hello')
    return 1;
}
const doSomething2 = function () {
    console.log('Hello2')
    return 2;
}
const doSomething3 = () => {
    console.log('Hello3')
    return 3;
}

console.log(doSomething());
console.log(doSomething2());
console.log(doSomething3());


// ----- Functions with arguments ---
console.log("----- Functions with arguments ---");
const doSomething4 = (someArgument) => {
    console.log(someArgument)
}

doSomething4("Hello4");
doSomething4(1234);


// ----- Argument preselection ---
console.log("----- Argument preselection ---");
const objectABC = {
    something: "a",
    someArgument: "b",
    somethingElse: "c"
}
const doSomething5 = ({someArgument}) => {
    console.log(someArgument)
}

doSomething5(objectABC);
