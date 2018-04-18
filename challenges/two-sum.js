/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

    for (let i = 0; i < arr.length; i += 1){
        for (let j = 0; j < arr.length; j += 1){
            if (i !== j) {
                if (arr[i] + arr[j] === n) return true;
            };   
        };
        return false;
    };
};



// console.log(twoSum([1,3,2], 4));

module.exports = twoSum;
