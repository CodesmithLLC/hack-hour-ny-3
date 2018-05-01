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
  const result = [];
  
  for (let i = 0, j = 0; (i < arr1.length) || (j < arr2.length); i += 1, j += 1){
    if(arr1[i] && arr2[j]){
      if (arr1[i]<arr2[j]){
        result.push(arr1[i]);
        j -= 1;
      } else if (arr1[i]>arr2[j]){
        result.push(arr2[j]);
        i -= 1;
      }else if (arr1[i] === arr2[j]){
        result.push(arr2[j], arr1[i])
      }
    } else if (arr1[i]){
      result.push(arr1[i])
    } else if (arr2[j]){
      result.push(arr2[j])
    }
  }
  return result;
}

module.exports = mergeArrays;
