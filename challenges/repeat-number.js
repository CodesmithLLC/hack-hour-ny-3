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
    let holderArr = [];
    for (let i = 0; i < array.length; i += 1){
        if (holderArr.indexOf(array[i]) === -1) {
            holderArr.push(array[i])
        } else {
            return array[i];
        }

    }
}

let array = [1,2,3,4,5,6,7,7,8,9,10];
console.log(repeatNumbers(array));

module.exports = repeatNumbers;
