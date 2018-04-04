/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  let temp = array.slice().sort((a, b) => a - b);
  let firstThree = temp.slice(0, 3);
  let lastThree = temp.slice(-3);
  let combined = firstThree.concat(lastThree).map(num => Math.abs(num)).sort((a, b) => a - b);
  return combined[combined.length - 1] * combined[combined.length - 2] * combined[combined.length - 3];
}

module.exports = highestProduct;
