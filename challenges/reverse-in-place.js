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

function reverseInPlace (array) {
  if(array.length < 2) return array;
  
  let first = array[0];
  let last = array[array.length-1];
  
  array[0] = last;
  array[array.length-1] = first;
  
  let leftArr = array.slice(0, 1);
  let rightArr = array.slice(-1);
  
  return [...leftArr, ...reverseInPlace(array.slice(1, -1)), ...rightArr];
}

console.log(reverseInPlace([1,2,3,4,5,6,7,8,9]))

module.exports = reverseInPlace;
