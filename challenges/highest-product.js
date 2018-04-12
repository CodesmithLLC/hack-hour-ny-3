/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;
  let newArr = array.sort((a,b) => a - b);
  let leftProd = newArr[0] * newArr[1];
  let rightProd = newArr[newArr.length - 1] * newArr[newArr.length - 2];
  let rightInnerProd = newArr[newArr.length - 2] * newArr[newArr.length - 3];
  if (leftProd === NaN || rightProd === NaN || rightInnerProd === NaN ) return 0;
  if (leftProd > rightProd || leftProd > rightInnerProd) {
    return leftProd * array[array.length - 1];
  } else {
    return array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  }
}


module.exports = highestProduct;
