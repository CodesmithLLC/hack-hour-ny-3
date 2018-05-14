/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    if (arr.length <= 1) return arr[0] === target
    let index = Math.floor(arr.length / 2)
    if (arr[index] === target) return true
    else if (arr[index] > target) return findInOrderedSet(arr.slice(0, index), target)
    else return findInOrderedSet(arr.slice(index + 1), target)
}


module.exports = findInOrderedSet;
