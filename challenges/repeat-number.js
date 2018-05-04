/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  const n = array.length - 1;
  const total = (n * (n + 1)) / 2;
  const result = array.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  return result - total;
}


module.exports = repeatNumbers;
