'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  return sumMultiplesXOrYBelowZ(3, 5, 1000)
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let smallCount = 0
  let bigCount = 0
  let [bigInc, smallInc] = x > y ? [x, y] : [y, x]
  while (smallCount < z || bigCount < z) {
    if (smallCount <= bigCount) {
      smallCount += smallInc
      if (smallCount < z && smallCount !== bigCount) {
        console.log(`${smallInc} multiple `, smallCount)
        sum += smallCount
      }
    }
    if (bigCount < smallCount) {
      bigCount += bigInc
      if (bigCount < z) console.log(`${bigInc} multiple `, bigCount)
      sum += bigCount < z ? bigCount : 0
    }
  }
  return sum;
}

console.log(sumMultiplesXOrYBelowZ(3, 5, 10))

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
