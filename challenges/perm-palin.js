/**
 * Given a string, determine if any of the 
 * permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let count = str.split('').reduce((a, b) => {
    if (a[b]) delete a[b];
    else a[b] = true;
    return a;
  }, {});
  return Object.keys(count).length <= 1;
}

module.exports = permPalin;
