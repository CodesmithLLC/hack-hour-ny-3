'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let threes = 999/3;
  let fives = 995/5;
  sum = 3*(1+threes)*threes/2 + 5*(1+fives)*fives/2;
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let xs, ys;
  for(let i=z-1; i>(z-x-1); i--){
    if(i%x === 0) xs = i/x;
  }
  for(let j=z-1; j>(z-y-1); j--){
    if(j%y === 0) ys = j/y;
  }  
  console.log(xs,ys)
  sum = x*(1+xs)*xs/2 + y*(1+ys)*ys/2;
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
