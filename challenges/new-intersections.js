/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
  let xStorage = {}, yStorage = {}, xVals=[], yVals=[], counter = 0;
  x.forEach((el) => {xStorage[el] ? xStorage[el]++ : xStorage[el] = 1})
  y.forEach((el) => {yStorage[el] ? yStorage[el]++ : yStorage[el] = 1})
  for(let xKey in xStorage) {
    if(xStorage[xKey] !== 1){
      console.log('xKey:',xKey)
      let xIndex = [], yValsAtX = [], yIndex = [], xValsAtY = []
      for(let i=0; i<x.length; i++){
        if(x[i] == xKey) xIndex.push(i);
      }
      console.log('xIndex',xIndex)
      xIndex.forEach((el) => yValsAtX.push(y[el]))
      console.log('yValsAtX',yValsAtX)
      let yMin = Math.min(... yValsAtX), yMax = Math.max(... yValsAtX)
      console.log('yMin',yMin,'yMax',yMax)
      for(let yKey in yStorage) {
        if(yStorage[yKey] !== 1 && yMin <= yKey && yMax >= yKey) {
          for(let j=0; j<y.length; j++){
            if(y[j] == yKey) yIndex.push(j);
          }
          console.log('yIndex',yIndex)
          yIndex.forEach((el) => xValsAtY.push(x[el]))
          console.log('xValsAtY',xValsAtY)
          let xMin = Math.min(... xValsAtY), xMax = Math.max(... xValsAtY)
          console.log('xMin',xMin,'xMax',xMax)
          if(xMin < xKey && xMax > xKey) counter ++;
        }
      }
    }
  }
  return counter
}

module.exports = newIntersections;
