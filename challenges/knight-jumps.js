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
  const xs = +str.substr(1, 1);
  const ys = +str.substr(3, 1);
  const moves = [
    { x: 2, y: -1 },
    { x: 2, y: 1 },
    { x: -2, y: 1 },
    { x: -2, y: -1 },
    { x: -1, y: 2 },
    { x: 1, y: 2 },
    { x: 1, y: -2 },
    { x: -1, y: -2 },
  ];
  let possibleMoves = moves
    .map(({ x, y }) => { return { x: x + xs, y: y + ys } })
    .filter(({ x, y }) => {
      const xInBounds = 0 <= x && x <= 8;
      const yInBounds = 0 <= y && y <= 8;
      return xInBounds && yInBounds;
    });
  return possibleMoves.length;
}

module.exports = knightjumps;
