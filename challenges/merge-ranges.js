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
  const result = [];
  array.forEach((pair) => {
    const oldResult = result.slice();
    let flag = true;
    result.forEach((times, j) => {
      if (pair[0] >= times[0] && pair[0] <= times[1]) {
        const newTime = [times[0], pair[1]];
        result.splice(j, 1, newTime);
      } else if (pair[1] >= times[0] && pair[1] <= times[1]) {
        const newTime = [pair[0], times[1]];
        result.splice(j, 1, newTime);
      }
    });
    oldResult.forEach((oldPair, i) => {
      if (oldPair[0] !== result[i][0] || oldPair[1] !== result[i][1]) flag = false;
    });
    if (flag) result.push(pair);
  });
  return result;
}

module.exports = mergeRanges;
