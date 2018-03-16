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
  var string = ''
  for (var i = 1; i <= n; i++) {
    for (var j = 0; j < n - i; j++) { //n - i amount of spaces
      string += ' ';
    }

    for (var k = string.length; k < n; k++) {
      string += '*'
    }

    console.log(string);
    string = '';
  }

  return '';
}

console.log(drawStairs(10));
module.exports = drawStairs;
