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
  const set = {};
  str.split('').forEach(char => set.hasOwnProperty(char) ? set[char]++ : set[char] = 1);

  return Object.keys(set).filter(x => set[x] % 2 !== 0).length < 2;
}

module.exports = permPalin;