/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    const srt = array.sort((a,b) => b - a)
    const beg = srt[0] * srt[1] * srt[2];
    const end = srt[0] * srt[srt.length - 1] * srt[srt.length - 2]
    return Math.max(beg, end);
  }


module.exports = highestProduct;
