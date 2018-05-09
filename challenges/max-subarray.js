/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = null;
  function maxArray(array) {
    const currentMax = array.slice(1).reduce((acc, curr) => {
      acc += curr
      return acc;
    }, array[0]);
    if (max === null || max <= currentMax) max = currentMax;
    if (array.length !== 0) maxArray(array.slice(1));
  }
  function maxArray2(array) {
    const currentMax = array.slice(1).reduce((acc, curr) => {
      acc += curr
      return acc;
    }, array[0]);
    if (max === null || max <= currentMax) max = currentMax;
    if (array.length !== 0) maxArray(array.slice(0, array.length - 1));
  }
  let copyBack = arr.slice();
  let copyFront = arr.slice();
  while (copyBack.length !== 0) {
    maxArray(copyBack);
    copyBack = copyBack.slice(0, copyBack.length - 1);
  }
  while (copyFront.length !== 0) {
    maxArray2(copyFront);
    copyFront = copyFront.slice(1);
  }
  return max;
}

module.exports = maxSubarray;
