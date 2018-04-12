/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  let mergedArr = arr1.map((e, i) => { return [e, arr2[i]]})
  mergedArr = mergedArr.reduce((a, b) => {
    if (b[0] > b[1]) {
      if (b[1] < a[a.length -1]) {
        a.splice(-1, 0, b[1]);
        a.push(b[0]);
        return a
      }
      return a = a.concat([b[1], b[0]])
    } else {
      if (b[0] < a[a.length -1]) {
        a.splice(-1, 0, b[0]);
        a.push(b[1]);
        return a
      }
      return a = a.concat([b[0], b[1]])
    }
  }, [])
  return mergedArr.filter((a) => { return a } )
}

module.exports = mergeArrays;
