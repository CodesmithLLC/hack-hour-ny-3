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
    if((!arr1 && !arr2) || (!Array.isArray(arr1) && !Array.isArray(arr2))) {
        return [];
    }

    var arr = [];

    while(arr1[0] && arr2[0]) {
        if(arr1[0] > arr2[0]) {
            arr.push(arr2[0]);
            arr2 = arr2.slice(1);
        } else {
            arr.push(arr1[0]);
            arr1 = arr1.slice(1);
        }

    }

    while(arr1[0]) {
        arr.push(arr1[0]);
        arr1 = arr1.slice(1);
    }

    while(arr2[0]) {
        arr.push(arr2[0]);
        arr2 = arr2.slice(1);
    }

    return arr;
}

module.exports = mergeArrays;
