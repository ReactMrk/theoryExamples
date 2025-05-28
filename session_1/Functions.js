console.log("Function declarations:")
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


console.log("-------------------------")
console.log("Functions with arguments:")
const doSomething4 = (someArgument) => {
    console.log(someArgument)
}

doSomething4("Hello4");
doSomething4(1234);
