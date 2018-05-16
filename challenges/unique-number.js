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
  const counts = {};
  // Collect counts
  array.forEach((elem) => {
    if (counts[elem]) counts[elem] += 1;
    else counts[elem] = 1;
  });
  // Find element that only appears once
  const singular = Object
    .entries(counts)
    .filter( ([key, count]) => count === 1);
  return +singular[0][0]
}

module.exports = uniqueNumber;
