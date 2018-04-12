/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

// function mergeArrays(arr1, arr2) {
//   let mergedArray = [];

//   while (arr1.length && arr2.length) {
//     if (arr1[0] > arr2[0]) mergedArray.push(arr2.shift());
//     else mergedArray.push(arr1.shift());
//   }

//   return [...mergedArray, ...arr1, ...arr2];
// }

function mergeArrays(a1, a2, a3 = []) {
  if (!a1.length || !a2.length) return [...a3, ...a1, ...a2];
  (a1[0] > a2[0]) ? a3.push(a2.shift()) : a3.push(a1.shift());

  return mergeArrays(a1, a2, a3);
}

module.exports = mergeArrays;
