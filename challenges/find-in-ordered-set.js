/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  function binSearch(start, end) {
    let middle = Math.floor((start + end)/2)
    if (arr[middle] === target) return true
    if (start === end) return false
    if (arr[middle] < target) {
      return binSearch(middle + 1, end)
    } else {
      return binSearch(start, middle - 1)
    } 
    return false
  }
  return binSearch(0, arr.length)
}


module.exports = findInOrderedSet;
