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
  let reg = 0;
  let curly = 0;
  let square = 0;
  let lastOpening = '';
  let openings = '{[(';
  let closings = '}])';
  let openIdx = null;
  let openingsArr = [];
  for (let i = 0; i < input.length && reg >= 0 && curly >= 0 && square >= 0; i++) {
    let curr = input[i];
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
    if (curr === '(') {
      reg++;
    } else if (curr === ')') {
      reg--;
    } else if (curr === '{') {
      curly++;
    } else if (curr === '}') {
      curly--;
    } else if (curr === '[') {
      square++;
    } else if (curr === ']') {
      square--;
    } else {
      return false;
    }
  }
  return reg === 0 && curly === 0 && square === 0;
}


module.exports = balancedParens;
