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
  let STORE = [];
  if (string.length === 1) {
    STORE.push(string);
    return STORE;
  }

  for (let i = 0; i < string.length; i += 1) {
    var firstChar = string[i];
    var charLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = anagrams(charLeft);
    for (var j = 0; j < innerPermutations.length; j += 1) {
      STORE.push(firstChar + innerPermutations[j]);
    }
  }
  return STORE;
}


module.exports = anagrams;
