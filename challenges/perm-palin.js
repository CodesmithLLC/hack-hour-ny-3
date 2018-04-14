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
    let count = 0;
    const letters = str.split("").sort()
    for (var i = 0; i < letters.length; i += 2) {
  
      while (letters[i] !== letters[i+1]) {
        i++
        count ++
      }
    }
    if (count < 2) {
      return true
    }
    return false
  }

module.exports = permPalin;