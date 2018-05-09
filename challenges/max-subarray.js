/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = Number.NEGATIVE_INFINITY
  let local = 0,
    last = arr.length + 1,
    slow = 0,
    fast = 1,
    i = 0

  while (fast < last) {
    current = arr.slice(slow, fast)
    local += current[current.length - 1]

    if (local > max) max = local
    
    fast++

    if (fast === last) {
      local = 0
      slow++
      fast = slow + 1
    }

    i++
  }

  return max
}

module.exports = maxSubarray;
