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

// O(n ^ 2) time, O(n) space
function rotateGrid(grid, n){
  let output = [];
  for(let i = 0; i< n; i++){
    let inner = [];
    for(let j = 0; j < n; j++){
      inner.push(grid[n-1-j][i])
    }
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
      console.log(grid)
      let adjust = j - first;
      // save your first spot in a temporary variable
      var tempTop = grid[first][j];
      //left column to top (since top is saved)
      grid[first][j] = grid[last][first];
      //right column to bottom row
      grid[last][first] = grid[last][last];
      //bottom row to left column
      grid[last][last] = grid[j][last];
      //tempTop row to right column
      grid[j][last] = tempTop;
    }
  }
  console.log('grid out: ', grid);
  return grid
}


module.exports = rotateGrid;

sampleGrid =[   [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13,14,15,16]  ]           
console.log(rotateGrid(sampleGrid, 4));
