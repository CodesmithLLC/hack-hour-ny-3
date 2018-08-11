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
  const knightMoveChecker  = [-2,-1,-2,1,2,1,2,-1,-1,2,-1,-2,1,2,1,-2];
  const counter = 0;
  const x = parseInt(str[1]);
  const y  = parseInt(str[3]); 
  for (var i = 0; i<knightMoveChecker.length-1; i+=2){
    if (x + knightMoveChecker[i] < 1 || y  + knightMoveChecker[i+1] < 1 || x + knightMoveChecker[i] > 8 
        || y  + knightMoveChecker[i+1] > 8){
      continue;
    }
    else counter++;
  }
  return counter;
}


function knightjumps(str) {
  const x = +str[1];
  const y = 1 * str[3];
  const counter = 0;

 // check all moves going left 1
 if (x - 1 >= 1) {
   if (y - 2 > 0) counter++;
   if (y + 2 < 9) counter++;
 }
 // check all moves going left 2
 if (x - 2 >= 1) {
   if (y - 1 > 0) counter++;
   if (y + 1 < 9) counter++;
 }
 // check all moves going right 1
 if (x + 1 <= 8) {
   if (y - 2 > 0) counter++;
   if (y + 2 < 9) counter++;
 }
 // check all moves going right 2
 if (x + 2 <= 8) {
   if (y - 1 > 0) counter++;
   if (y + 1 < 9) counter++;
 }
 return counter;
}

module.exports = knightjumps;
