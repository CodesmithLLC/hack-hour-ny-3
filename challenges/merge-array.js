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
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let newArr = [];

    while (currentIndex1 < arr1.length && currentIndex2 < arr2.length) {
        if (arr1[currentIndex1] < arr2[currentIndex2]){
            newArr.push(arr1[currentIndex1]);
            currentIndex1++;
        } else {
            newArr.push(arr2[currentIndex2]);
            currentIndex2++;
        };
    };

    if (currentIndex2 !== arr2.length){
        const rest = arr2.splice(currentIndex2);
        newArr.concat(rest);
        return newArr.concat(rest);
    };

    if (currentIndex1 !== arr1.length){
        const rest = arr1.splice(currentIndex1);
        newArr.concat(rest);
        return newArr.concat(rest);
    };

    return newArr;
}

// var my_array = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];

// console.log(mergeArrays(my_array, another_array));
 

module.exports = mergeArrays;
