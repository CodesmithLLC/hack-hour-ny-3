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
    if(str.length === 1) return true
    let stack = [str[0],str[1]]
    for(let i=2; i<str.length; i++){
      if(str[i] === stack[stack.length-2]) return true
      else stack.push(str[i])
    }
    return false
  }

module.exports = permPalin;