//TODO: Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//Basic Syntax --> will return a result or undefined
function createHelloWorld() { 
        return "Hello World";  
}
console.log(createHelloWorld()); // Output: "Hello World"



//* Solution Notes:
    //* You can declare a function with two main ways: using the 'function' keyword or using arrow syntax.

    //* Anonymous Function --> exclude the name of the function after the function keyword 
    console.log("\nThis is the result of an Anonymous Function: \n 3 + 4 = ? ....")
    let add = function(a, b) {
        const sum = a + b;
        return sum;
    }
    console.log(add(3, 4)) //Output: 7
    