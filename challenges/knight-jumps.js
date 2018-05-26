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
  const checks = [[1,1], [-1,1], [1,-1],[-1,-1]]
  let numberOfMoves = 0

  for (let check of checks) {
    let x = 1
    let y = 3

    x = x * check[0]
    y = y * check[1]
    
    m = x
    n = y
    
    x = parseInt(str[1]) + x
    y = parseInt(str[3]) + y

    if ( (x > 0 && y > 0) && (x < 9 && y < 9)) numberOfMoves += 1
  
    x = parseInt(str[1]) + n
    y = parseInt(str[3]) + m

    if ( (x > 0 && y > 0) && (x < 9 && y < 9)) numberOfMoves += 1
  }

  return numberOfMoves
}

module.exports = knightjumps;
