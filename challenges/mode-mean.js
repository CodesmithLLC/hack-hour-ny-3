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
  let highestFreq = null;
  for (let key in mode) {
    if (highestFreq === null || mode[key] >= highestFreq) {
      highestFreq = mode[key];
      highest = Number(key);
    }
  }
  console.log(highest, avg);
  return highest === avg;
}
console.log(modemean([1,2,3,4,5,5]));

module.exports = modemean;
