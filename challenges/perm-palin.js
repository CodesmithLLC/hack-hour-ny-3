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

function permPalin(inputArr) {
  const arr = inputArr.split('');
  const cache = arr.reduce((acc, char) => {
    if (acc[char] === undefined) acc[char] = true;
    else delete acc[char];
    return acc;
  }, {});
  const cacheLength = Object.keys(cache).length;

  if (inputArr.length % 2 === 0 && cacheLength === 0) return true;
  if (inputArr.length % 2 === 1 && cacheLength === 1) return true;
  return false;
}

module.exports = permPalin;
