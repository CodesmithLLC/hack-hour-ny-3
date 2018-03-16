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
  let recurseStairs = function() {
    let stairs = '';

    if (n === 1) {
      return '*';
    }

    for (var i = n - 1; i >= 0; i--) {
      stairs += '*';
    }

    stairs += '\n';

    return stairs += drawStairs(n - 1);
  }

  var smallToBig = recurseStairs(6).split('\n').reverse();
  // return smallToBig.join('\n');
  var finalStr = '';

  for (var i = 0; i < smallToBig.length; i++) {
    var layer = smallToBig[i];
    
  }

  return finalStr;
}

console.log(drawStairs(6));
module.exports = drawStairs;
