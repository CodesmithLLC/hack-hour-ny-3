/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sortedArr = array.sort((a, b) => a - b);
  // console.log('sorted', sortedArr);
  let lastThree = sortedArr.slice(-3).reduce((a, b) => a * b);
  let firstTwoLastOne = sortedArr[0] * sortedArr[1] * sortedArr[sortedArr.length - 1];

  return Math.max(lastThree, firstTwoLastOne);
};

module.exports = highestProduct;
