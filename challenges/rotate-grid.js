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

// This method only works when the number is contineous:
// function rotateGrid(grid, n) {
//     let biggest = grid[grid.length-1];
//     let i=0;
//     biggest.forEach(element => {
//         let j=0;
//         while(j<n){
//         grid[i][j] = element-(j*n);
//         }
//     });
// }

// More robust solution. But 0(n3) time complexity.
// function rotateGrid(grid, n) {
//     let i=0;
//     grid.forEach(row => {
//       while(i<n){
//         grid[i].unshift(row[row.length-3+i])
//         i++;
//       }
//       i=0;
//     })
//     grid.forEach(row => {
//       row.splice(n,row.length)
//     })
//     return grid
// }
  


// O(n ^ 2) time, O(n) space
function rotateGrid(grid, n){
  let output = [];
  for(let i = 0; i< n; i++){
    let inner = [];
    for(let j = 0; j < n; j++){
      inner.push(grid[n-1-j][i])
    }
    console.log(inner)
    output.push(inner);
  }
  return output;
}

// O(n ^ 2) time, O(1) space
function rotateGrid(grid, n){
  console.log('grid in: ', grid);
  for(let i = 0; i < Math.floor(n/2); i++){
    let first = i;
    let last = n - 1 - i;
    for(let j = first; j < last; j++){
      let adjust = j - first;
      // save your first spot in a temporary variable
      var tempTop = grid[first][j];
      //left column to top (since top is saved)
      grid[first][j] = grid[last-adjust][first];
      //right column to bottom row
      grid[last-adjust][first] = grid[last][last-adjust];
      //bottom row to left column
      grid[last][last-adjust] = grid[j][last];
      //tempTop row to right column
      grid[j][last] = tempTop;
    }
  }
  console.log('grid out: ', grid);
  return grid
}


module.exports = rotateGrid;


