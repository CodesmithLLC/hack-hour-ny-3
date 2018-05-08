/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//   const highest = [];
//   const multiplyAll = (arr) => arr.reduce((acc, curr) => acc * curr);
//   array.forEach
//   return multiplyAll(array.sort((a, b) => b > a).slice(0, 3)); //O(n log n) naive solution
// }

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  const multiplyAll = (arr) => arr.reduce((acc, curr) => acc * curr);
  let highest = -Infinity;
  let highPos = -Infinity;
  let highNeg = - Infinity;
  for (let i=0; i < array.length - 2; i += 1) {
    
  }
  return highest; //O(n^3) naive solution
}


module.exports = highestProduct;
