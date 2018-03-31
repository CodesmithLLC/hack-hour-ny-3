/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// Iterate through array while checking sliced off array.
// function subsetSum(array, target) {
//   let temp = array.slice();
//
//   for (let i = 0; i < array.length; i++) {
//     let num = array[i];
//     if (num === target) {
//       return true;
//     }
//     while (temp.length > 2) {
//       let sum = temp.reduce((acc, curr) => {
//         acc += curr;
//         return acc;
//       }, 0);
//       if (sum === target) {
//         return true;
//       }
//       temp = temp.slice(0, temp.length - 1);
//     }
//     if (temp.length === 2) {
//       for (let i = 1; i < array.length; i++) {
//         let checker = array[i];
//         let sum = num + checker;
//         if (sum === target) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

function subsetSum(array, target) {
  if(target === 0) return true;
  if(!array.length) return false;
  // left side of OR:  continues search, including every number in the array
  // right side of OR: starts a new subset with the current target
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target)
}

console.log(subsetSum([3, 7, 4, 2], 5)) // true
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))// -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)) //-> false
console.log(subsetSum([8, -6, 1, -3], 6)) //-> true, 8 + 1 + (-3) = 6

// console.log(subsetSum([3, 7, 4, 2], 5)) // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
// console.log(subsetSum([8, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6
module.exports = subsetSum;
