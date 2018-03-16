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
    //I tried to jump straight into using recursion 
    //I think I could have solved this with a for loop and counter
    //but I wanted to see if I could understand solving this recursively 
    //to get some practice but couldn't quite get there 
    var start = 1;
    var stairs = "";

    if(n === 0){
        return;
    }

    console.log(stairs)

    return drawStairs(n - 1);
}

drawStairs(3)


module.exports = drawStairs;
