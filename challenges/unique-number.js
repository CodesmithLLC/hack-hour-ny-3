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
  for (let i = 0; i < array.length; i++) {
    if (array[array[i]] > 0) array[array[i]] = -array[array[i]]
    else array[-array[i]] = -array[-array[i]]
  }

  for (var local, i = 0; !local; i++) {
    if (array[i] < 0) local = array[-array[i]]
  }

  return local
}

module.exports = uniqueNumber;
