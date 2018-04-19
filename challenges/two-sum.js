/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, target) {
  const lookup = {};
  for(let i = 0; i < arr.length - 1; i += 1) {
    if(lookup[n - arr[i]]) return true;
    lookup[arr[i]] = true;
  }
  return false;
}

module.exports = twoSum;
