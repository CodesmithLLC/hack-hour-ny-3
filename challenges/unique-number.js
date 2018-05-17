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
// O(n) time & O(n) space
function uniqueNumber(array) {
  let store = [];
  for (let i = 0; i < array.length; i += 1) {
    if (store.includes(array[i])) {
      store.splice(store.indexOf(array[i]), 1)
    }
    else {
      store.push(array[i])
    }
  }
  return store.reduce((a, b) => { return a + b })
}






module.exports = uniqueNumber;
