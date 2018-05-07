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
    var sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    var min = Math.min(...array)
    var max = Math.max(...array)       
    var sumIndi = 0
    for (var i = min; i <= max; i ++) {
        sumIndi += i
    }
    return sum - sumIndi
}

module.exports = repeatNumbers;
