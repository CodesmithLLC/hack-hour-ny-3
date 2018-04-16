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
  // Concat each row.
  const concated = grid.reduce((acc, row) => {
    acc = acc.concat(row);
    return acc;
  }, []);
  // Shift elements by n.
  const arr = [];
  concated.forEach((num, i) => {
    const newIndex = (i + n) % concated.length;
    arr[newIndex] = num;
  });
  // Split array into rows again.
  const split = [];
  while (arr.length > 0) {
    split.push(arr.splice(0, n));
  }
  // Get the first elements into the first index of each row.
  const results = [];
  split[0].forEach((el) => {
    const newRow = [el];
    results.push(newRow);
  });
  // Push in the remaining elements starting from the last row.
  let i = n - 1;
  while (i > 0) {
    split[i].forEach((el, index) => {
      results[index].push(el);
    });
    i -= 1;
  }
  return results;
}

module.exports = rotateGrid;
