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
    

    //* Immediately Invoked Function Expression --> you can create a function and immediately execute it
    console.log("\nThis is an Immediately Invoked Function Expression where the numbers being entered for the parameter are entered at the end of the function, not in a console log.")
    let result = function(a, b) {
        const sum = a + b;
        return sum;
    } (4, 4);
    console.log(result); //Output: 8
    //* You write code like this to encapsulate a variable within a new scope. For example, another dev can immediately see the 'sum' can not be used anywhere outside the function body.


    //* Functions Within Functions --> creating functions within other functions
    console.log("\nThis is a function inside of a function.")
    function createFunction() {
        function add(a, b) {
            const sum = a + b;
            return sum;
        }
        return add;
    }
    const f = createFunction();
    console.log(f(5, 5));


    //*Closures --> when a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. The combination of the funciton and its environment is caled a closure. 
    console.log("\nThis is a Closure. Variable 'a' is passed into the first function and then variable 'b' is passed into the second function that is within the main funciton. Closure allows both variables to be used.")
    function createAdder(a) {
        function f(b) {
            const sum = a + b;
            return sum;
        }
        return f;
    }
    const func = createAdder(9);
    console.log(func(5)); //Output: 14