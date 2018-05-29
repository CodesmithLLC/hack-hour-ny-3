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
  function combine(arr) {
    function recursion(a, remaining, combo, all) {
      if (a === 0) {
        if (combo.length > 0) {
          all[all.length] = combo
        }
        return;subsetSum([8, -2, 1, -3], 6)
      }
      
      for (let j = 0; j < remaining.length; j++) {
        recursion(a-1, remaining.slice(j+1), combo.concat([remaining[j]]), all);
      }
      return;
    }
    let all = [];
    for (let i = 2; i < arr.length; i++) {
      recursion(i, arr, [], all);
    }
    all.push(arr);
    return all
    
  }

  var array2 = combine(array);
  
  for (let k = 0; k < array2.length; k++) {
    if (array2[k].reduce((a, b) => a + b, 0) === target) {
      return true
    }
  }
  
  return false
}

module.exports = subsetSum;
