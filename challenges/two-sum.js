/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 1) return false;
  let currentIndex = 0;
  let hasSum = false;

  while (arr[currentIndex] !== undefined && !hasSum) {
    arr.forEach((v, i) => {
      let localSum = 0 + arr[currentIndex];
      if (i !== currentIndex) {
        localSum += v;
        if (localSum === n) hasSum = true;
      }
      console.log(localSum)
    });
    currentIndex++;
  }

  return hasSum;
}
module.exports = twoSum;
