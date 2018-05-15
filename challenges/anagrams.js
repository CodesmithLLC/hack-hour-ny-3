/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  const combinations = [];
  for (let i = 0; i < string.length; i++) {
    let local = string.slice(i, i + 1)
    for (let i = 0; i < string.length; i++) {
      combinations.push(string)
      combinations.push(string.split('').reverse().join(''))
      let newString = string.slice(1)
      newString += string[0]
      string = newString;
    }
  }
  return combinations
}

console.log(anagrams('abcde'))

module.exports = anagrams;
