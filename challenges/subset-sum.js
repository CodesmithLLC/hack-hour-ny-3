/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    numbers = array.filter((value) => {
        return value <= target;
    });

    numbers.sort((a, b) => {
        return b - a;
    });

    // array with all the subsets
    var result = [];

    var i;
    var sum = 0;
    var addedIndices = [];

    // go from the largest to the smallest number and
    // add as many of them as long as the sum isn't above target
    for (i = 0; i < numbers.length; i++) {
        if (sum + numbers[i] <= target) {
            sum += numbers[i];
            addedIndices.push(i);
        }
    }

    // remove the items we summed up from the numbers array, and store the items to result
    var subset = [];
    for (i = addedIndices.length - 1; i >= 0; i--) {
        subset.unshift(numbers[addedIndices[i]]);
        numbers.splice(addedIndices[i], 1);
    }
    result.push(subset);
    
    var newSum = result.reduce(function (acc, value) {
        return acc.concat(value);
    });

    return (newSum.reduce((acc, value) => { return acc += value })) === target;
}

module.exports = subsetSum;
