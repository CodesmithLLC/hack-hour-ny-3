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

// const check = ['(', '{', '[', ']', '}', ')'];

// function balancedParens(input){
//   if(!input) return true;

//   let first = input.slice(0, 1);
//   let last = input.slice(-1);
//   let valid = check.includes(first) && check.includes(last);
//   let current = check.indexOf(first);

//   input = input.slice(1,-1);
//   console.log(check[current], check[check.length-1-current]);
//   return (check[current] === check[check.length-1-current]) ? balancedParens(input) : false;
// }
// function addAll (arr) {
//   return arr.reduce((a, v) => a+v);
// }

module.exports = balancedParens;
