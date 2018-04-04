/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let highest = null;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            for (var k = j + 1; k < array.length; k++) {
                let product = array[i] * array[j] * array[k];
                if (product > highest || highest === null) {
                    highest = product;
                }
            }
        }
    }

    return highest;
}


module.exports = highestProduct;
