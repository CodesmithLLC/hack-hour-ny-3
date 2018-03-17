/*
 * Given an sorted of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 * Return true or false
 * mean = avg
 * mode = most
 */


function modemean(array) {
  var sorted = array.sort(function(a, b) {
    return a - b;
  });

  var sum = sorted.reduce(function(acc, value) {
    return acc += value;
  }, 0);

  var mean = Math.floor(sum / sorted.length);

  var occurences = {};
  sorted.forEach(function(el) {
    if (occurences[el] === undefined) {
      occurences[el] = 1;
    } else {
      occurences[el] += 1;
    }
  });

  var mode;
  var highestVal = 0;

  for (var ele in occurences) {
    if (occurences[ele] >= highestVal) {
      if (occurences[ele] === highestVal && Number(occurences[ele]) > Number(mode)) {
        mode = ele;
      }

      highestVal = occurences[ele];
      mode = ele;
    }
  }

  return mode == mean;
}

module.exports = modemean;
