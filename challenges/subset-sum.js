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
  let l = array.length;
  let start = 1;
  let last = array.length;
  let result;


  while(start < last && !result) {
    let arr = Array(l * start).fill(0);

    arr = arr.map(function(v, i){
      v = [];
      v.push(array[i])
      return v;
    });

    arr.forEach(function (curr) {
      let check = curr.reduce((a, b) => a + b);
      if (check === target) return result = true;
    });

    start += 1;
  }

  return result;
}

console.log(subsetSum([1,2,3], 3));

(`[1,2,3]

3 x 1

[1]
[2]
[3]

3 x 2

1 2
1 3
2 1
2 3
3 1
3 2

`)

module.exports = subsetSum;
