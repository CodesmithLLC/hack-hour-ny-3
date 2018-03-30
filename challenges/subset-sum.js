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
  var arr = [];
  if(arr.length <= 1) {
    return array[0] === target ? true : false;
  }
    for (var i = 0; i < array.length; i++) {
        arr.push(array[i]);
      for (var j = i + 1; j < array.length; j++) {
        if(arr.reduce((x,y) => {return x + y}) + array[j] <= target) {
          arr.push(array[j]);
        }

        if(arr.indexOf((arr.reduce((x,y) => {return x + y}) + array[j]) - target) > -1) {
          arr.splice(arr.indexOf((arr.reduce((x,y) => {return x + y}) + array[j]) - target),1);
          arr.push(array[j]);
        }

        if(arr.reduce((x,y) => {return x + y}) === target) {
          return true;
        }
      }
      arr = [];
    }
    return false;
}

module.exports = subsetSum;
