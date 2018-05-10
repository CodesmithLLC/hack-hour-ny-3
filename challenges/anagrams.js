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
  if (string.length === 1) return [string];
  let grams = [];
  for (let i = 0; i < string.length; i += 1) {
    const otherChars = string.slice(0, i) + string.slice(i + 1)
    grams = grams.concat(anagrams(otherChars).map((el) => {
      return string[i] + el;
    }));
  }
  return grams;
}

module.exports = anagrams;
