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
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        var firstArr = array[i];
        for (var j = i + 1; j < array.length; j++) {
            var secondArr = array[j];
            if(firstArr[1] > secondArr[0] && secondArr[0] > firstArr[0]) {
                arr.push([firstArr[0],secondArr[1]]);
            }
        }
    }
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
