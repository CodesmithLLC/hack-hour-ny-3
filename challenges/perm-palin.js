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
  let counter = {};
  str.split('').forEach(elem => {
    if (counter[elem]) {
      counter[elem] += 1;
    } else {
      counter[elem] = 1;
    }
  })
  console.log(counter);
  const numOdds = Object.values(counter)
    .filter(count => count % 2 !== 0)
    .length;
	return numOdds <= 1;
}

module.exports = permPalin;