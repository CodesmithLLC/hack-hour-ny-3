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
  const avg = Math.floor(array.reduce((acc, curr) => acc += curr, 0) / array.length);
  const mode = array.reduce((acc, el) => {
    if (acc[el] === undefined) acc[el] = 1;
    else acc[el] += 1;
    return acc;
  }, {});

  let highest = null;
  let highestFreq = null;
  const modeArr = Object.keys(mode);

  modeArr.forEach((key) => {
    if (highestFreq === null || mode[key] >= highestFreq) {
      highestFreq = mode[key];
      highest = Number(key);
    }
  });

  return highest === avg;
}

module.exports = modemean;
