/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let reducer = function(acc, cur){
    return acc+cur;
  }
  let sum = arr.reduce(reducer, 0);
  while(arr.length > 1){
    arr[0] < arr[arr.length-1] ? arr.shift() : arr.pop()
    let newSum = arr.reduce(reducer,0);
    sum < newSum ? sum = newSum : sum = sum;
  }
  return sum
}

module.exports = maxSubarray;
