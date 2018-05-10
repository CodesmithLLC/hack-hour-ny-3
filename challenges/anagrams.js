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
  const pairs = elementsAndRemainder(string.split(''))
  const nested = pairs.map(({ element, remainder }) => {
    if (remainder.length) {
      const subAnagrams = anagrams(remainder.join(''))
      return subAnagrams.map(e => element + e)
    } else {
      return [element]
    }
  })
  return nested.reduce((a, b) => a.concat(b))
}

function elementsAndRemainder(arr) {
  return arr.map((element, index, arr) =>
    ({
      element,
      remainder: arr.slice(0, index).concat(arr.slice(index + 1))
    })
  )
}


module.exports = anagrams;
