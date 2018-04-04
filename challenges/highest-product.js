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
  for (let i=0; i < array.length - 2; i += 1) {
   for (let j = i + 1; j < array.length - 1; j += 1) {
     for (let k = j + 1; k < array.length; k += 1) {
       let product = array[i] * array[j] * array[k];
        if (product > highest) {
          highest = product;
        }
      }
    } 
  }
  return highest; //O(n^3) naive solution
}


module.exports = highestProduct;
