/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  arr.reduce((a, b) => {
    if (a[n - b]) a = true
    a[b] = 1
  }, {})
  return false
}

module.exports = twoSum;
