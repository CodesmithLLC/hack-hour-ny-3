/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  return arr.some((num, i) => {
    const toCheck = arr.slice(0, i).concat(arr.slice(i + 1));
    const target = n - num;
    return toCheck.some(num2 => num2 === target);
  });
}

const a = [1,2,3,4,5];
console.log(twoSum(a, 9));
module.exports = twoSum;
