/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let subSize = arr.length
    let subArr = arr
    let offset = 0
    let maxSum = -Infinity
    while (subSize > 0) {
        let sum = subArr.reduce((a, b) => a + b, 0)
        if (sum > maxSum) maxSum = sum
        offset += 1
        if (subSize + offset > arr.length) {
            subSize -= 1
            offset = 0
        }
        subArr = arr.slice(offset, subSize + offset)
    }
    return maxSum
}

module.exports = maxSubarray;
