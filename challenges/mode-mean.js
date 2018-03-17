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
    modeCount = {}
    array.forEach(num => {
        modeCount[num] ? modeCount[num] += 1 : modeCount[num] = 1
    })
    mode = Object.entries(modeCount)
        .map(numPair => {
            numPair[0] = Number.parseInt(numPair[0], 10)
            return numPair
        }).reduce((maxCount, count) => {
            if (count[1] > maxCount[1]) {
                return count
            } else if (count[1] === maxCount[1]) {
                return count[0] > maxCount[0] ? count : maxCount
            } else {
                return maxCount
            }
        })[0]
    mean = Math.floor(
        array.reduce((num1, num2) => {
            return num1 + num2
        })
        / array.length
    )
    return mean === mode
}

module.exports = modemean;
