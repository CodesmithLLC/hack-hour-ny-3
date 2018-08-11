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
//   let spaces = ''; // string of spaces
//   let splats = ''; // string of asterisks

//   for (let i = 1; i <= n; i++) {
//     spaces = ' '.repeat(n - i);
//     splats = '*'.repeat(i);
//     console.log(spaces + splats);
//   }
// }

// function drawStairs(n) {
//   for (let i =1; i <= n; i += 1) {
//     console.log(' '.repeat(n - i) + '*'.repeat(i));
//   }
// }

// // Using padStart
// function drawStairs(n) {
//   for (let i=1; i<=n; i++){
//     let prints = "*".repeat(i);
//     console.log(prints.padStart(n));
//   }
// }
 
function drawStairs(n){
  for(let i = 1; i <= n; i++){
    console.log(' '.repeat(n-i) + '*'.repeat(i))
  }
}

function drawStairs(n) {
  for(let i = 1; i <= n; i++) {
    console.log('*'.repeat(i).padStart(n))
  }
}



drawStairs(5)

module.exports = drawStairs;
