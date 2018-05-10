/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    var max = -Infinity;
    var subsetSum = 0;
    for (var i = 0; i < arr.length; i++) {
        subsetSum += arr[i]

        if (subsetSum > max) {
            max = subsetSum
        }

        if (subsetSum < 0) {
            subsetSum = 0
        }
    }
    return max
}

// add the numbers together

console.log(maxSubarray([-2,-3,-5,-8]))  //-> -2
// console.log(maxSubarray([20, 10, -1, 20, -1, 30]))// -> 18
module.exports = maxSubarray;
