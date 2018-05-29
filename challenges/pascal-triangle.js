/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  if (numRows <= 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const result = [[1], [1, 1]];

  while (result.length !== numRows) {
    let i = 0;
    const toPush = [1];
    while (toPush.length !== result.length) {
      const prevRow = result[result.length - 1];
      const sum = prevRow[i] + prevRow[i + 1];
      toPush.push(sum);
      i += 1;
    }
    toPush.push(1);
    result.push(toPush);
  }

  return result;
}

module.exports = pascalTriangle;
