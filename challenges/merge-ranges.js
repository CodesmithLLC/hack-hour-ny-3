/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    var result = []
    for (var i = 0; i < array.length - 1; i ++) {
        var beginning = array[i][0]
        var end = array[i][1]
        if (end < array[i+1][0]) {
          result.push([beginning,end])
        } else {
          result.push([beginning, array[i+ 1][1]])
        
        }
    }
  return result
}


if the 1st num is the smallest create and array
if the second number is smaller than the first num in any array add it to the second
module.exports = mergeRanges;
