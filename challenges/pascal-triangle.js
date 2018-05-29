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
  let array = []
  if (numRows >= 1) {
    array.push([1])
  }
  while (numRows >= 2) {
    let innerArr = []
    innerArr[0] = 1
    innerArr[array.length] = 1
    for (let i = 1; i <= array[array.length - 1].length - 1; i++) {
      innerArr[i] = array[array.length - 1][i - 1] + array[array.length - 1][i]
    }
    array.push(innerArr)
    numRows = numRows - 1
  }
  return array
}

module.exports = pascalTriangle;
