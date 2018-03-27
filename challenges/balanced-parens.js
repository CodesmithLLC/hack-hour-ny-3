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
  var inputArr = input.split("");
  var parens = inputArr.filter(x => x.match(/{|[|\(|]|}|\)/g))
  var right = "{[(".split("")
  var left = "}])".split("")
  var square = "[]"
  var round = "()"
  var curly = "{}"
  if (!right.includes(parens[0])) return false
  if (!left.includes(parens[parens.length - 1])) return false
  
  
  function recursion(i) {
    if ((parens[i] + parens[i+1] === square || parens[i] + parens[i+1] === round || parens[i] + parens[i+1] === curly)) {
      parens.splice(i, 2) 
    } else {
      recursion(i+1)
    }
  }
  
  for (var i = 0; i < parens.length/2 -1; i++) {
    recursion(i)
  }

  recursion(0)

  return parens.length > 0 ? false : true
}


module.exports = balancedParens;
