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
  // storage for anagrams
  const storage = {};
  // helper function for recursive calls
  const helper = (str, built = '') => {
    // base case
    if (built.length === string.length) storage[built] = true;
    // else
    else {
      // loop through str
      for (let i = 0; i < str.length; i += 1) {
        // create new built variable so we don't have scope issues and add a letter on loop
        const newBuilt = built + str[i];
        // rebuild string without letter at index i
        const rebuiltStr = str.slice(0, i) + str.slice(i + 1);
        // call helper again
        helper(rebuiltStr, newBuilt);
      }
    }
  };
  // call recursive function
  helper(string);
  // return keys of storage
  return Object.keys(storage);
}

module.exports = anagrams;
