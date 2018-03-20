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

function modemean (array) {
  const mean = Math.floor (
    array.reduce ((accumulator, currentValue) => accumulator + currentValue) / array.length
  );
  var mode = 
  const modeObj = {};
  for (let i = 0; i < array.length; i++) {
    if (!modeObj[array[i]]) {
      modeObj[array[i]] = 1;
    } else {
      modeObj[array[i]]++;
    }
  }
}, 0);
  return mean === mode;
}

module.exports = modemean;
