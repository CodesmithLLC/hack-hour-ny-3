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
 *                  sampleGrid after:   [   [7, 4, 1], [8, 5, 2], [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
    for (var i = 0; i < grid[0].length; i++) {
        var innerArr = [];
        for (var j = 0; j < Math.floor(grid.length / 2); j++) {
            var first = grid[j][i];
            var last = grid[grid.length - 1 - j][i];
            console.log(first, last);
            grid[j][i] = last;
            grid[grid.length - 1 - j][i] = first;
        }
    }
    return grid;
}

console.log(rotateGrid([[1, 2], [3, 4]]));
console.log(rotateGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
module.exports = rotateGrid;


/*
    [1,2]       [3,1]
    [3,4]       [4,2]
*/
