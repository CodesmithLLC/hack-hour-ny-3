/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const multiplyAll = (arr) => arr.reduce((acc, curr) => acc * curr);
  return multiplyAll(array.sort((a, b) => b > a).slice(0, 3)); //O(n log n) naive solution
}


module.exports = highestProduct;
