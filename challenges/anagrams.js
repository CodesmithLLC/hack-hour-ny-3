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
  if (string.length < 2) return string;
  let result = [];

  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== i) continue;
    let remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let subPermutation of anagrams(remainingString))
      result.push(string[i] + subPermutation)

  }
  
  return result;
}


module.exports = anagrams;
