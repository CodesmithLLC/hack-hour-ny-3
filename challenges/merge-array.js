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

function mergeArrays(arr1, arr2) {
    var min = Math.min(arr1[0], arr2[0])
    var max = Math.max(arr1[arr1.length-1],arr2[arr2.length-1])
    for (var i = min; i <= max; i ++) {
      arr1[]
    } 
  }
  
  var my_array = [3,4,6,10,11,15,21];
  var another_array = [1,5,8,12,14,19];
   
  mergeArrays(my_array, another_array); // -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]


module.exports = mergeArrays;
