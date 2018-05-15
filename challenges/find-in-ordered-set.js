/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    if(target < arr[0] || target > arr[arr.length - 1]) return false
    i = Math.floor(arr.length/2)
    while(arr[i]){
    if (target === arr[i]) return true
    if (target > arr[i]) i++
    if (target < arr[i]) i--
}
 return false
}

console.log(findInOrderedSet([2,3,4,5,6,7,8,94], 4))

module.exports = findInOrderedSet;
