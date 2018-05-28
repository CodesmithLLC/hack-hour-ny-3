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
  const stack = [];
  const arr = inputArr.split('');

  arr.forEach((ch) => {
    if (stack.indexOf(ch) >= 0) stack.splice(stack.indexOf(ch), 1);
    else stack.push(ch);
  });

  if (inputArr.length % 2 === 0 && stack.length === 0) return true;
  if (inputArr.length % 2 === 1 && stack.length === 1) return true;
  return false;
}

module.exports = permPalin;
