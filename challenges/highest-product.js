/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) {
    return 0;
  }
  let temp = array.slice();
  temp.sort((a, b) => {
    if (a - b > 0) {
      return 1;
    } else if (a - b < 0) {
      return -1;
    } else {
      return 0;
    }
  });
  if (temp[0] > 0 && temp[1] > 0) {
    return temp[0] * temp[1] * temp[temp.length - 1];
  }
  return temp[temp.length - 1] * temp[tenp.length - 2] * temp[temp.length - 3];
}


module.exports = highestProduct;
