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
  let result = '';
  let spaces = '';
  for (let i = 0; i < n; i++) {
    spaces += ' ';
  }

  for (let j = 0; j < n; j++) {
    result += spaces;
    spaces = spaces.slice(1);
    let stars = '';
    stars = addStars(j + 1);
    result += stars;
    if (j !== n - 1) {
      result += '\n';
    }
  }

  return result;
}

function addStars(n) {
  let result = '';

  for (let i = 0; i < n; i++) {
    result += '*';
  }

  return result;
}
console.log(drawStairs(6));

module.exports = drawStairs;
