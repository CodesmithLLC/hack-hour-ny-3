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
  output = "";
  function numToStars(n){
  translated = ""
    for(let i = 1; i <= n; i+=1){
      translated += "*"
  }
  return translated
}
  for (let j = 1; j <= n; j+=1){
    output += numToStars(j)
    if(j<n){
      output += "\n"
    }
  }
  return output;
}
module.exports = drawStairs;
