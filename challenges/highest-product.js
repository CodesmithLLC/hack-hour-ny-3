/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    var newArr = array.sort();
    console.log(newArr);
    return newArr[newArr.length - 1] * newArr[newArr.length - 2] * newArr[newArr.length - 3];
}


console.log(highestProduct([4,2,10,9,2,4,8,6,]));

module.exports = highestProduct;
