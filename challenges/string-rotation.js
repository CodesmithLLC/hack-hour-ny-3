/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {

  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let s1Arr = s1.split('');
  let s2Arr = s2.split('')

  let firstLetter = s1Arr[0];
  let indexSplit = s2Arr.indexOf(firstLetter);
  let lastSection = s2Arr.splice(indexSplit)

  let unrotated = lastSection.concat(s2Arr).join('');

  return isSubstring(unrotated, s1)
}

// console.log(stringRotation('hello','hello'))
// console.log(stringRotation('hello','llohe'))
// console.log(stringRotation("hello", "he"))
// console.log(stringRotation("hello", "ollhe"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
