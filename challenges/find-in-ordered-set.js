/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let midPoint = Math.floor(arr.length / 2);
  counter = 0;
  while(left !== right) {
    if (arr[midPoint] === target) return true;
    if (arr[midPoint] < target) {
      left = midPoint + 1;
      midPoint = left + Math.floor((right - left)/2);
    } else {
      right = midPoint;
      midPoint = left + Math.floor((right - left)/2);
    }
  }
  return false;
}


module.exports = findInOrderedSet;
