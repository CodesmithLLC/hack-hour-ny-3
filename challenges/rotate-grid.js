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
function rotateGrid(grid, n) {
    let i=0;
    grid.forEach(row => {
      while(i<n){
        grid[i].unshift(row[row.length-3+i])
        i++;
      }
      i=0;
    })
    grid.forEach(row => {
      row.splice(n,row.length)
    })
    return grid
}
  

module.exports = rotateGrid;






[1,2,3,4]
[5,6,7,8]
[9,10,11,12]
[13,14,15,16]



[13,9,5,1]
[14,10,6,2]
[15,11,7,3]
[16,12,8,4]
