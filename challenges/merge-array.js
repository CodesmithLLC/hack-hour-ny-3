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

mergeArrays([3, 4, 6, 10, 11, 15, 21], [1, 5, 8, 12, 14, 19])

function mergeArrays(arr1, arr2) {
    const newArr = new Array(arr1.length + arr2.length)
    let i1 = 0
    let i2 = 0
    for (let i = 0; i < newArr.length; i++) {
        if (i1 < arr1.length && (arr2[i2] === undefined || arr1[i1] < arr2[i2])) {
            newArr[i] = arr1[i1]
            i1++
        } else if (i2 < arr2.length && (arr1[i1] === undefined || arr2[i2] < arr1[i1])) {
            newArr[i] = arr2[i2]
            i2++
        }
    }
    return newArr
}

module.exports = mergeArrays;
