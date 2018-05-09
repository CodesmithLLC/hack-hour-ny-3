/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var innerSum = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            innerSum += arr[j];
            if (innerSum > sum) sum = innerSum;
        }
    }
    return sum;
}

module.exports = maxSubarray;
