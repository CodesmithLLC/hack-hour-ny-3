/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  // number (max stars) right to left -> stars up from 1
  let line = Array(n).fill(' ');

  for (var i = n - 1; i >= 0; i--) {
    line[i] = '*';
    console.log(line.join(''));
  }
}

drawStairs(6);
module.exports = drawStairs;
