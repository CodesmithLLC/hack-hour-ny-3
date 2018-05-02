/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(g, n) {
  let current = g[0][0] //1
  let next = g[0][1] //2
  g[0][1] = current //1

  current = next //2
  next = g[1][1] //4
  g[1][1] = current //2

  current = next
  next = g[1][0]
  g[1][0] = current 

  current = next //2
  next = g[0][0] //4
  g[0][0] = current //2

  console.log(g)
}


const test = [
  [1,2],
  [3,4]
]

const output = [
  [3,1],
  [4,2]
]
console.log(rotateGrid(test, 2))

module.exports = rotateGrid;
