/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y) {
  if (x.length < 4) return 0;
  let count = 0;
  for (let i = 0; i < x.length - 3; i += 1) {
    for (let j = 1; j < x.length - 2; j += 1) {
      for (let k = 2; k < x.length - 1; k += 1) {
        for (let l = 3; l < x.length; l += 1) {
          if (x[i] === x[j] && y[k] === y[l]) count +=1;
          if (x[i] === x[k] && y[j] === y[l]) count +=1;
          if (x[i] === x[l] && y[j] === y[k]) count +=1;
          if (x[j] === x[k] && y[i] === y[l]) count +=1;
          if (x[j] === x[l] && y[i] === y[k]) count +=1;
          if (x[k] === x[l] && y[i] === y[j]) count +=1;
        }
      }
    }
  }
  return count;
}

module.exports = newIntersections;
