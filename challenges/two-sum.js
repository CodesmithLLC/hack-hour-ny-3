/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    let storage = {};

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (storage[ele]) {
            return true;
        }
        
        storage[n - ele] = true;
    }

    return false;
}

module.exports = twoSum;
