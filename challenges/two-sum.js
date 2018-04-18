/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    let sum = false;
    if (arr.length === 0 || !Array.isArray(arr)) return false;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
          console.log([i ,j])
            if (arr[i] + arr[j] === n) {
                sum = true;
            }
        }
    }

    return sum;
}

module.exports = twoSum;
