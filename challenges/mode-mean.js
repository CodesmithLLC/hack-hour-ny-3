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
  function add(a, b) {
    return a + b
  }
  var mean = Math.floor(array.reduce(add, 0)/(array.length))

  var counts = {}
  for (var i = 0; i < array.length; i ++) {
    if (counts[array[i]]) {
 		  counts[array[i]] += 1;
 		} else {
 		  counts[array[i]] = 1   
 		}
  }
  var countsVal = Object.values(counts).sort(function(a, b) {
    return b - a
  })
  
  var mode = Object.keys(counts).filter(function(key) {
    return counts[key] === countsVal[0]
  });
  
  mode = mode.sort(function(a, b) {
    return b - a
  })
  
  if (mode[0] == mean) {
    return true
  } else {
    return false
  }
}

module.exports = modemean;
