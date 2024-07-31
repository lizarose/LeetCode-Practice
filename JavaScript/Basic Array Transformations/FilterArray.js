//TODO: Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

    //The fn function takes one or two arguments:

    //arr[i] - number from the arr
    //i - index of arr[i]
    //filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

    //Please solve it without the built-in Array.filter method.

var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

// Example usage:
const arr1 = [0, 10, 20, 30];
const greaterThan10 = n => n > 10;
const newArray1 = filter(arr1, greaterThan10);
console.log(newArray1); // Output: [20, 30]

const arr2 = [1, 2, 3];
const firstIndex = (n, i) => i === 0;
const newArray2 = filter(arr2, firstIndex);
console.log(newArray2); // Output: [1]

const arr3 = [-2, -1, 0, 1, 2];
const plusOne = n => n + 1;
const newArray3 = filter(arr3, plusOne);
console.log(newArray3); // Output: [-2, 0, 1, 2]
