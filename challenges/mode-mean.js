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
  return getMean(array) === getMode(array);
}

function getMean(array) {
  let average =  array.reduce((a,b) => {
    return a + b;
  },0)/array.length;

  return Math.floor(average);
}

function getMode(array) {
  let numCount = {};
  let maxArr = [];
  let max = null;

  array.forEach(num => {
    !numCount[num] ? numCount[num] = 1 : numCount[num] += 1;
  });

  for (let key in numCount) {
    if (numCount[key] > max || max === null) {
      maxArr.push(key);
      max = numCount[key];
    } else if (numCount[key] === max) {
      maxArr.push(key);
    }
  }

  return Math.max(...maxArr);
}

// let nums = [3, 4, 5, 5, 8];
// console.log(getMean(nums));
// console.log(getMode(nums));
console.log(modemean(nums));
module.exports = modemean;
