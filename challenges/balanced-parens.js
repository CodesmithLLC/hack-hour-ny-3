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
  var arr = [];
  for (var i = 0; i < input.length; i++) {
    if(input[i] === '(' || input[i] === '[' || input[i] === '{') {
      arr.push(input[i]);
    } else if(input[i] === ')') {
      if(arr.lastIndexOf('(') > -1) {
        arr.splice(arr.lastIndexOf('('))
      } else {
        return false;
      }
    } else if(input[i] === ']') {
      if(arr.lastIndexOf('[') > -1) {
        arr.splice(arr.lastIndexOf('['))
      } else {
        return false;
      }
    } else if(input[i] === '}') {
      if(arr.lastIndexOf('{') > -1) {
        arr.splice(arr.lastIndexOf('{'))
      } else {
        return false;
      }
    }


  }
  return arr[0] === undefined;
}

module.exports = balancedParens;
