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
  var arr = [];

  checkAnagrams("", string);

  function checkAnagrams(newString, secondString) {
    if (newString.length === secondString.length) {
      arr.push(newString);
      return;
    }

    for (var i = 0; i < secondString.length; i++) {
      if (newString.includes(string[i])) {
        continue;
      } else {
        newString += string[i];
      }
      checkAnagrams(newString, secondString);
      newString = newString.slice(0, -1);
    }
  }

  return arr;
}

module.exports = anagrams;

