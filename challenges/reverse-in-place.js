'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    let reversedCount = 0;
    let length = array.length - 1;
    while (reversedCount < length){
        let moveValue = array[array.length - 1];
        array.splice(reversedCount, 0, moveValue);
        array.splice(array.length-1, 1)
        reversedCount++
    }
    return array;   
}

// console.log("s")

// console.log(reverseInPlace([1,2,3,4,5]))
// console.log(reverseInPlace([4,5]))
// console.log(reverseInPlace([5]))
// console.log(reverseInPlace([5,4,3,2,1]))

module.exports = reverseInPlace;
