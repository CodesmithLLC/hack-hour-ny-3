/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    var max = 0;
    var current = 0;
    for (var i = 0; i < arr.length; i++) {
        current += arr[i]
        if (current < 0) {
            current = 0
        }
        console.log(current,"current", arr[i], 'arr[i')
        if (current > max) {
            max = current
        }
    }
    return max
}

// add the numbers together

// console.log(maxSubarray([15,20,-5,10]))  //-> 40
console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))// -> 18
module.exports = maxSubarray;
