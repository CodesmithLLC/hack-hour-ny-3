/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true lohel
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  if (isSubstring(s1, s2)) {
    return true;
  }

  let counter = 0;
  let start = s1.indexOf(s2[0]); // 'l' '2'
  if (s2[s2.length - 1] === s2[0]) {
    start += 1;
  }
  while (counter < s1.length) {
    if (s1[start % s1.length] !== s2[counter]) {
      return false;
    }
    counter++;
    start++;
  }
  return true;
}

// console.log(stringRotation("hello", "hello")); // -> true
// console.log(stringRotation("hello", "llohe")); // -> true
// console.log(stringRotation("hello", "he")); // -> false
// console.log(stringRotation("hello", "ollhe")); // -> false (not a rotation, just an anagram)
// console.log(stringRotation('bunny', 'Bunny'));
// console.log(stringRotation('hello', 'lohel'));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
