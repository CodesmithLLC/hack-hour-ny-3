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
    return Array(n).fill(' ').map(function(newLine, i){
        i++;
        newLine = newLine.repeat(n); //fill to n
        newLine = newLine.slice(0, -i); //remove last
        return newLine += '*'.repeat(i)+'\n'; //return result + line break
    }).join('')
}

module.exports = drawStairs;
