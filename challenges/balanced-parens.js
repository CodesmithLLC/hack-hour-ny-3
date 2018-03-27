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



function balancedParens(input) {
  const parenStack = [];
  const opens = '({[';
  const closes = ')}]';
  const buffer = input.split('');

  for (let i = 0; i < buffer.length; i += 1) {
    let match;
    let chr = buffer[i];
    switch (chr) {
      case '(':
        parenStack.push(chr);
        break;
      case ')':
        match = parenStack.pop();
        if (match !== '(') return false;
        break;
      case '{':
        parenStack.push(chr);
        break;
      case '}':
        match = parenStack.pop();
        if (match !== '{') return false;
        break;
      case '[':
        parenStack.push(chr);
        break;
      case ']':
        match = parenStack.pop();
        if (match !== '[') return false;
        break;
      default:
    }
  }
  if (parenStack.length > 0) return false;
  return true;
}

module.exports = balancedParens;
