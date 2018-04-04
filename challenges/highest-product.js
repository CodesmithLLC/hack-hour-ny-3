/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array.sort(function(a, b) {
    return b - a;
     });
    var product = 1;
    for (var i = 0; i < 3 && i < array.length; i ++) {
      product *= array[i]
    }
    return product;
}


module.exports = highestProduct;
