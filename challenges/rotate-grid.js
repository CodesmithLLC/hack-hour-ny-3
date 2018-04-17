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

function rotateGrid(grid, n) {
    let rows = n;
    let arrayLength = grid[0].length;
    let arrayOfNewRows = [];

    //build an empty array grid mirroring the inputted grid but with null values
    for (let i = 0; i < n; i += 1) {
        let currentRow = [];
        for (let i = 0; i < arrayLength; i += 1) {
            currentRow.push(null);
        }
        arrayOfNewRows.push(currentRow);
    }
    // console.log(arrayOfNewRows);

    //go through each array in grid, 
    //first array values will populate the last index of 
    //each array in the new rows
    let startInsertIndex = 0;
    let startInsertArr = 0;
    for (let i = 0; i < grid.length; i += 1) {
        //get value from current array
        grid[i].forEach((value) => {
            console.log('Value in first loop: ', value)
            //push that value to the correct index in new rotated array

            arrayOfNewRows[startInsertArr][startInsertIndex] = value;
            startInsertIndex += 1;
            startInsertArr += 1;
            console.log(arrayOfNewRows);

        })
        startInsertIndex = 0;
        startInsertArr = 0;
    }

    console.log(arrayOfNewRows);

}

rotateGrid([[7, 4, 1], [8, 5, 2], [9, 6, 3]], 3);


module.exports = rotateGrid;
