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

var count = 1;
function drawStairs(n) {
  if(n === 0) {
    return;
  }
  var str = "";
  for (var i = 1; i < n; i++) {
    str += " ";
  }
  for (j = 0; j < count; j++ ) {
    str += "*";
  }
  count += 1;
  console.log(str);
  return drawStairs(n - 1);
}

module.exports = drawStairs;
