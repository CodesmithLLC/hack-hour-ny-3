// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let strs = str.split("").filter((a) => { return typeof(parseInt(a)) === 'number' && !isNaN(parseInt(a)) })
  let x = parseInt(strs[0])
  let y = parseInt(strs[1])
  function isOnBoard(x, y) {
    return x >= 1 && x <= 8 && y >= 1 && y <= 8 ? true : false
  }
  let possibleMoves = [[x + 2, y - 1], [x + 2, y + 1], [x - 2, y - 1], [x - 2, y + 1], [x + 1, y - 2], [x + 1, y + 2], [x - 1, y - 2], [x - 1, y + 2]]
  return possibleMoves.reduce((a, b) => {
    if (isOnBoard(b[0], b[1])) a++
    return a
  }, 0)
}

module.exports = knightjumps;
