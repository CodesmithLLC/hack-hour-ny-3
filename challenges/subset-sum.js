/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// Iterate through array while checking sliced off array.
function subsetSum(array, target) {
  let results = array.slice();
  let temp = array.slice();
  for (let i = 0; i < array.length; i++) {
    results.push(checkSum(temp, temp.length - 1));
    temp = temp.slice(1);
  }
  for (let i = 0; i < results.length; i++) {
    if (results[i] === target) {
      return true;
    }
  }
  return false;
}

function checkSum(array, pairings) {
  if (pairings === 1) {
    return;
  }
  let sum = array[0];
  let i = 0;
  while (i < pairings) {
    sum += array[i + 1];
    i++;
  }
  return sum;
}
console.log(subsetSum([1,2,3], 4));
module.exports = subsetSum;
