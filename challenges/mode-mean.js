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
  var mean = Math.floor((array.reduce((total, current) => {return total + current}, 0)) / array.length);
  var mode = null;
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    var count = 1;
    for (var j = i + 1; j < array.length; j++) {
      if(array[i] === array[j]) count += 1;
    }
    if(count >= counter) {
      counter = count;
      mode = array[i];
    }
    count = 0;

  }
  return mean === mode;
}

module.exports = modemean;
