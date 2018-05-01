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
  let sameInd;
  let same = false;
  for (let i = 0; i < s1.length; i +=1){
    if(s1[0] === s2[i]){
      sameInd = i;
    }
  }
  for (let i = 0, j = sameInd; i < s1.length; i += 1, j += 1){
    if (s2[j] === undefined){j = 0;}
    if (s1[i] === s2[j]){
      same = true;
    } else {
      same = false;
      break;
    }
  }
  return same;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
