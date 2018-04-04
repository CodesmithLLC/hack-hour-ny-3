/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let temp = array.sort();
  return temp[temp.length - 1] * temp[temp.length - 2] * temp[temp.length - 3];
}


module.exports = highestProduct;
