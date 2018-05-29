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
  if (numRows === 0) return []
  const result = [
    [1]
  ]
  while (result.length !== numRows) {
    let newRow = [1];
    let index = 0;
    let lastArr = result[result.length - 1]
    while (newRow.length !== lastArr.length) {
      newRow.push(lastArr[index] + lastArr[++index])
    }
    newRow.push(1)
    result.push(newRow)
  }
  return result
}

console.log(pascalTriangle(3))

// [
//   [1],
//   [1,1],
//   [1,2,1]
// ]

// if (1)= 1
// if(2) =  1,1,
// else 1, currentArr[current] + current[next], 1 repeat

module.exports = pascalTriangle;
