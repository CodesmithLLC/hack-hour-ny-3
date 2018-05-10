/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let STORE = [];
  for (let i = 0; i < arr.length; i += 1) {
    let SUM = arr[i];
    let k = 0;
    while (arr[i + 1 + k] > 0 || arr[i + 1 + k] + arr[i + 2 + k] > 0 && arr[i + 1 + k]) {
      SUM += arr[i + 1 + k];
      k += 1;
    }
    STORE.push(SUM);
  }
  return Math.max(...STORE);
}

module.exports = maxSubarray;
