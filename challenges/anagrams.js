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
  if(typeof string !== 'string') return [];
  let permutations = {};
  function getPerms(str, curStr){
    if(str === '') return permutations[curStr] = true;
    for(let i = 0; i < str.length; i++){
      let selected = str[i];
      let rest = str.slice(0,i) + str.slice(i+1);
      getPerms(rest, curStr + selected);
    }
  }
  getPerms(string, '');
  return Object.keys(permutations);
}


console.log(anagrams('abc'))

module.exports = anagrams;






//  function anagrams(string) {
//   if (typeof string !== 'string') return 'Please insert a string into anagrams function';
//   // Store results in object for constant lookup time
//   const permutations = {};
//   // Create driver function for getting perms. Build result in second parameter.
//   function getPerms(str, cur = '') {
//     console.log(cur)
//     // Base case: After using all characters from str, save anagram as key. Value does not matter.
//     if (str === '') return permutations[cur] = true;
//     // Loop through string
//     for (let i = 0; i < str.length; i++) {
//       // Take letter at current index
//       const selected = str[i];
//       // Store the rest of the letters for the next call
//       const rest = str.slice(0, i) + str.slice(i + 1);
//       // Pass the leftover letters and the built up current string to a recursive call
//       getPerms(rest, cur + selected);
//     }
//     // Return null to end recursive calls declaratively
//     return null;
//   }
//   // Call getPerms on string input
//   getPerms(string);
//   // Return permutations as an array
//   return Object.keys(permutations);
// }