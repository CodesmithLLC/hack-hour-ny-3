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
  const s = array.reduce((acc, num) => {
    if (acc[num] === undefined) acc[num] = true;
    else delete acc[num];
    return acc;
  }, {});
  return Object.keys(s)[0];
}

module.exports = uniqueNumber;
