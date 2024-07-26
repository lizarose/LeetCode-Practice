//TODO: Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

//TODO: 1. toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".

//TODO: 2. notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".




function expect(val) {
    return {
        toBe: function(compareVal) {
            if (val === compareVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(compareVal) {
            if (val !== compareVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

// Usage
const value = 5;
const test = expect(value);

try {
    console.log(test.toBe(5)); // Output: true
    console.log(test.notToBe(null)); // Output: true
    console.log(test.toBe(7)); // Throws "Not Equal" error
} catch (error) {
    console.error(error.message);
}
