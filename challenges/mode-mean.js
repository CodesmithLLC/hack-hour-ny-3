/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let avg = Math.floor(array.reduce((acc, curr) => acc += curr, 0) / array.length);
  let mode = array.reduce(function(acc, el) {
    if (acc[el] === undefined) {
      acc[el] = 1;
    } else {
      acc[el]++;
    }
    return acc;
  }, {});
  let highest = null;
  for (let key in mode) {
    if (highest === null || mode[key] >= highest) {
      highest = mode[key];
    }
  }
  return highest === avg;
}

module.exports = modemean;
