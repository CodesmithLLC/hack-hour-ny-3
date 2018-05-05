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
  let sortArr = array.sort((a, b) => {
    return a[0] - b[0]
  })
  return sortArr.reduce((a, b) => {
    if (a[a.length-1][1] >= b[0] && a[a.length-1][1] <= b[1]) {
      a[a.length-1] = ([a[a.length-1][0], b[1]])
    } else if (a[a.length-1][1] < b[0]) {
      a.push(b)
    }
    return a
  }, [sortArr[0]])
}

module.exports = mergeRanges;
