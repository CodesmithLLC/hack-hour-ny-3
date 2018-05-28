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
  const result = [];
  let j = 0;
  let k = 0;

  while (result.length !== arr1.length + arr2.length) {
    const el1 = arr1[j];
    const el2 = arr2[k];
    if (el1 > el2) {
      result.push(el2);
      k += 1;
    } else if (el1 < el2) {
      result.push(el1);
      j += 1;
    } else result.push(el1 || el2);
  }

  return result;
}

module.exports = mergeArrays;
