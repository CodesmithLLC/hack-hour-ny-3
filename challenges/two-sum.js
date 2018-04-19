/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const toCheck = {};
  return arr.some((num) => {
    const target = n - num;
    if (toCheck[target] !== undefined) return true;
    toCheck[num] = true;
  });
}


module.exports = twoSum;
