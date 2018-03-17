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
    const mean = array.reduce((acc, cur) => acc + cur)/array.length;
    const modes = array.reduce((counts, cur) => {
        if (cur in counts) {
            counts[cur] += 1;
        } else {
            counts[cur] = 1;
        }
        return counts;
    }, {});
    mode = +Object.entries(modes).reduce((acc, cur) => {
        if (acc[1] === cur[1]) {
          if (+acc[0] >= +cur[0]) return acc;
          return cur;
        }
        if (acc[1] >= cur[1]) return acc;
        return cur})[0];
    return mean === mode;
}

module.exports = modemean;
