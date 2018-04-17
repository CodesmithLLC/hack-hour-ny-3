/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    var product = null;
    if (array.length < 3 || !Array.isArray(array)) return 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            for (var k = j + 1; k < array.length; k++) {
                if(((array[i] * array[j] * array[k]) > product) || product === null) {
                    product = (array[i] * array[j] * array[k]);
                }
            }
        }
    }
    return product;
}

module.exports = highestProduct;
