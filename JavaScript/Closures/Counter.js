//TODO: Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
console.log("This is part 1: ")
function createCounter(n) {
    let count = n;
    return function() {
        const result = count;
        count += 1;
        return result;
    };
}

// Usage
const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12


//* Solution Notes:
    //*Closures vs Classes:
    //*Besides differences in syntax, both code examples essentially serve the same purpose. They both allow you to pass in some state in a "constructor" and have "methods" that access this state.

    //* One key difference is that closures allow for true encapsulation. In the class example, there is nothing stopping you from writing addTo2.a = 3; and breaking it's expected behavior. However, in the closure example, it is theoretically impossible to access a. Note that as of 2022, true encapsulation is achievable in classes with # prefix syntax.

    //* Another difference is how the functions are stored in memory. If you create many instances of a class, each instance stores a single reference to the prototype object where all the methods are stored. Whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called. For this reason, classes can be more efficient, particularly in the case where there are many methods.

    //* Unlike in languages like Java, you will tend to see code written with functions rather than with classes. But since JavaScript is a multi-paradigm language, it will depend on the particular project you are working on.



//TODO: Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

    //The three functions are:

        //increment() increases the current value by 1 and then returns it.
        //decrement() reduces the current value by 1 and then returns it.
        //reset() sets the current value to init and then returns it.
console.log("This is part 2: ")
var createCounter = function(init) {
    let count = init;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        reset: function() {
            count = init;
            return count;
        }
    };
    
};
const counts = createCounter(5);
console.log(counts.increment()); // 6
console.log(counts.reset());     // 5
console.log(counts.decrement()); // 4
