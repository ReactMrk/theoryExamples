// ----- Function declarations ---
console.log("----- Function declarations ---");
function aNamedFunction() {
    console.log('Hello')
    return 1;
}
const aNamedFunctionIntoVariable = function () {
    console.log('Hello2')
    return 2;
}
const anArrowFunction = () => {
    console.log('Hello3')
    return 3;
}

console.log("aNamedFunction", aNamedFunction());
console.log("aNamedFunctionIntoVariable", aNamedFunctionIntoVariable());
console.log("anArrowFunction", anArrowFunction());
console.log("anAnonymousFunction", () => {
    console.log('Hello4')
    return 4;
});

// ----- Functions with arguments ---
console.log("----- Functions with arguments ---");
const doSomething = (someArgument) => {
    console.log(someArgument)
}

doSomething("Hello4");
doSomething(1234);


// ----- Argument preselection ---
console.log("----- Argument preselection ---");
const objectABC = {
    something: "a",
    someArgument: "b",
    somethingElse: "c"
}
const doSomething2 = ({someArgument}) => {
    console.log(someArgument)
}

doSomething2(objectABC);
