/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  function add(array) { 
    return array.reduce((a, b) => { return a + b })
  } 
  let newArr = {}
  let subArr = arr
  while(subArr.length) {
    if (subArr[0] < subArr[subArr.length - 1]) {
      subArr = subArr.slice(1, subArr.length)
      if (subArr.length) newArr[add(subArr)] = subArr
    } else {
      subArr = subArr.slice(0, subArr.length - 1)
      if (subArr.length) newArr[add(subArr)] = subArr
    }
  }
  return newArr[Math.max(...Object.keys(newArr))]
}

module.exports = maxSubarray;
