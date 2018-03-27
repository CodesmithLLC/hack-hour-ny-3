/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
  let lastOpening = '';
  let openings = '{[(';
  let closings = '}])';
  let openIdx = null;
  let openingsArr = [];
  let sliced = input.split('').filter((char) =>'[{()}]'.includes(char) ? true : false).join('');

  for (let i = 0; i < sliced.length; i++) {
    let curr = sliced[i];
    if (openings.includes(curr)) {
      openingsArr.push(curr);
      openIdx = openings.indexOf(openingsArr[openingsArr.length - 1]);
    }
    if (closings.includes(curr)) {
      if (closings.indexOf(curr) !== openIdx) {
        return false;
      }
      openingsArr.pop();
      openIdx = openings.indexOf(openingsArr[openingsArr.length - 1]);
    }
  }
  return !openingsArr.length;
}

module.exports = balancedParens
