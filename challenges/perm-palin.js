/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let string = str.split(' ').join('');
  let count = {};
  let odd = 0;
  
  for (let i = 0; i < string.length; i++) {
    string[i] in count ? count[string[i]] += 1 : count[string[i]] = 1;
  }

  for (let letter in count) {
    if (count[letter] % 2 !== 0) odd += 1;
  }
  
  return odd > 1 ? false : true;
}

module.exports = permPalin;