/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let index = Math.floor(arr.length/2)
  if (arr[index] === target) {
    return true
  } else if (arr[index] < target && index) {
    return findInOrderedSet(arr.slice(index, arr.length), target)
  } else if (arr[index] > target && index) {
    return findInOrderedSet(arr.slice(0, index), target)
  }
  return false
}


module.exports = findInOrderedSet;
