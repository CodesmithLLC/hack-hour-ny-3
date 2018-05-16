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

// O(n) time
function uniqueNumber(array) {
    const cache = {}
    for (let num of array) {
        if (cache[num]) delete cache[num]
        else cache[num] = true
    }
    const num = Object.keys(cache)[0]
    return parseInt(num, 10)
}


module.exports = uniqueNumber;
