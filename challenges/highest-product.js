/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

highestProduct = (array, i = 3, product = 1) => {  
  let max = Math.max(...array);
  array.slice(array.indexOf(max), 1);
  
  product *= max, i--;

  return !i ? product : highestProduct(array, i, product)
}

// function highestProduct(array) {
//   let product = 1;
//   for (let i = 0; i < 3; i++) {
//     let maxNumber = Math.max(...array);
//     array.slice(array.indexOf(maxNumber), 1);
//     product *= maxNumber;
//   }
//   return product;
// }

module.exports = highestProduct;
