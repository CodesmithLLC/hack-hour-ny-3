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
  let firstIndex = 0;
  let secondIndex = 0;
  const newArr = [];
  // Merge until we run out of an array.
  while(firstIndex < arr1.length && secondIndex < arr2.length) {
    if (arr1[firstIndex] < arr2[secondIndex]) {
      newArr.push(arr1[firstIndex]);
      firstIndex += 1;
    } else {
      newArr.push(arr2[secondIndex]);
      secondIndex += 1;
    }
  }
  // Push the rest of the remaining array.
  while(firstIndex < arr1.length) {
    newArr.push(arr1[firstIndex]);
    firstIndex += 1;
  };
  while(secondIndex < arr2.length) {
    newArr.push(arr2[secondIndex]);
    secondIndex += 1;
  };
  return newArr;
}

module.exports = mergeArrays;
