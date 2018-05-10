'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let n;
  if (1000 % 2 === 0) {
    n = Math.floor((1000 / 2)) - 1
  } else {
    n = Math.floor(1000 / 2)
  }
  return 3 * ((n*(n+1)) / 2) + 5 * ((n*(n+1)) / 2) - 15 * ((n*(n+1)) / 2)
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let n;
  if (z % 2 === 0) {
    n = Math.floor((z / 2)) - 1
  } else {
    n = Math.floor(z / 2)
  }
  return x * ((n*(n+1)) / 2) + y * ((n*(n+1)) / 2) - (x*y) * ((n*(n+1))) / 2)
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
