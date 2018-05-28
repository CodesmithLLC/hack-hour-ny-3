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
  const sortArr = array.sort((a, b) => a[0] - b[0]);
  return sortArr.reduce((acc, curr) => {
    const lastRange = acc[acc.length - 1];
    if (lastRange[1] >= curr[0] && lastRange[1] <= curr[1]) {
      acc[acc.length - 1] = [lastRange[0], curr[1]];
    } else if (lastRange[1] < curr[0]) acc.push(curr);
    return acc;
  }, [sortArr[0]]);
}

module.exports = mergeRanges;
