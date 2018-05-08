/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    arr = arr.slice(0)
    while (arr.length) {
        let firstNumber = arr.pop()
        for (let i = 0; i < arr.length; i++) {
            if (firstNumber + arr[i] === n) return true
        }
    }
    return false
}

module.exports = twoSum;
