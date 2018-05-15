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
  var original = string
  var result = [];
  function inner() {
    result.push(string)
    string = string.slice(0,string.length -2)+string[string.length - 1] + string[string.length - 2]
    if (string === original) {
      return result
    }
    anagrams(string)
    return result 
  }
}


//use closure
//create an inner func with new string and second
//if the length of both string are the same ass it to result
//loop through second string 
//see if it includes a letter in og string
// if it does, ignore
//else add letter from og to newString
//recursion
//remove last letter in newString

var result = anagrams('abc');
console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
module.exports = anagrams;
