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

function permPalin(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = permPalin(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }

  return results;
}

function checkPalin(string) {
	let perms = permPalin(string);
	perms = perms.slice(1);
	return perms.includes(string) ? true : false;
}

console.log(checkPalin('abab')); // => true
console.log(checkPalin('cbaba')); // => true
console.log(checkPalin('cbac')); // => false
console.log(checkPalin('a')); // => true


module.exports = permPalin;
