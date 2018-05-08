'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.
function sumOfXUnderY(x, y) {
  const count = Math.floor((y-1E-15)/x);
  const sumOfConsecutive = count*(count + 1)/2;
  return sumOfCounts = x * sumOfConsecutive;
}

function sumMultiples3Or5Below1000() {
  const sumOfThree = sumOfXUnderY(3, 1000);
  const sumOfFive = sumOfXUnderY(5, 1000);
  const overlap = sumOfXUnderY(15, 1000);
  return sumOfThree + sumOfFive;
}



// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  return sumOfXUnderY(x, z) + sumOfXUnderY(y, z) - sumOfXUnderY(x * y, 1000);
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
