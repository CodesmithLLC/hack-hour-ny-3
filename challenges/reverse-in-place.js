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
   const arrLength = array.length
   for (let i = array.length; i >= 0; i -=1){
     array[i] = array[i - 1];
   }
   for (let i = 1; i <=arrLength; i +=2){
     array.unshift(array[i])
     array.pop()
   }
   return array;
 }

 console.log(reverseInPlace([undefined, '1','2','3','4','5']));

module.exports = reverseInPlace;
