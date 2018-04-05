/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (!Array.isArray(array)) return 0
    array.sort(function(a, b) {
    return b - a;
  });
    var product = array[0] * array[1] * array[2];
    if (!product)return 0
    return product;
  }


module.exports = highestProduct;
