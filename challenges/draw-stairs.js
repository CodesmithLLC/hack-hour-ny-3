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

// function drawStairs(n) {
// drawStairs(n) = drawStairs(n-1)
// }


function drawStairs(n){
let output = "";
  for (let j = 1; j <= n; j+=1 ){
    output += ' '.repeat(n-j) + '*'.repeat(j) + "\n"
  }
  return output.slice(0,-1);
}
