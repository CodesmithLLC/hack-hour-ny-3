/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
    let sorted = array.filter(num => num !== 0)
    sorted = sorted.sort()
    let pos1 = sorted[sorted.length-1]* sorted[sorted.length-2]*sorted[sorted.length-3]
    if(sorted[0]<0 && sorted[1]<0){
      pos2 = sorted[0]*sorted[1]*sorted[sorted.length-1];
      return Math.max(pos1,pos2)
    }
    return pos1;
  }

module.exports = highestProduct;
