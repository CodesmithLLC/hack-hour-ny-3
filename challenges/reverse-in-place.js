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
    for (let i=0; i<array.length; i++){
        array.splice(i,0,array.pop())
    }
    return array

    // let current = 0;
    // let opposite = array.length-1;
    // let center = array.length / 2;

    // while (current < center) {
    //     let left = array[current];
    //     let right = array[opposite];
        
    //     array[current] = right;
    //     array[opposite] = left;
        
    //     current++;
    //     opposite--;
    // }

    // return array;
}

module.exports = reverseInPlace;
