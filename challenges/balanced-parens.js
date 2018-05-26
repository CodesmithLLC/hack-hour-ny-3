/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *x
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

function balancedParens(input) {
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const stack = [];
  const parens = input.split('');
  parens.forEach((paren) => {
    const lastEl = stack[stack.length - 1];
    if (pairs[paren] !== undefined) {
      stack.push(paren);
    } else if (paren === '}' && lastEl === '{') stack.pop();
    else if (paren === ']' && lastEl === '[') stack.pop();
    else if (paren === ')' && lastEl === '(') stack.pop();
  });
  return stack.length === 0;
}

module.exports = balancedParens;
