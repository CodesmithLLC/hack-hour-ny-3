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

function repeatNumbers(array, i = 0, current = array[i], set = {}) {
  if (i === 0 && current === undefined) return
  else current = array[i++], set[current] = true
  console.log(current)
  return set[current] ? current : repeatNumbers(array, i, current, set)
}

console.log(repeatNumbers([1,2,3,3]))

module.exports = repeatNumbers;
