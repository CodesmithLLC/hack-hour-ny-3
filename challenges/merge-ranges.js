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

function merge (range1, range2) {
  // Assumes range1[0] < range2[0]
  let output = [];
  if (range1[1] < range2[0]) return [range1, range2];
  return [range1[0], range2[1]];
}

function mergeRanges(array) {

}

module.exports = mergeRanges;
