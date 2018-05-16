/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  let sum = array.reduce((a, b) => {
    return a + b
  }, 0)
  let sum2 = array.filter((v, i, self) => { return self.indexOf(v) === i }).reduce((a, b) => {
    return a + b
  }, 0)
  return (sum2 * 2) - sum
}

module.exports = uniqueNumber;
