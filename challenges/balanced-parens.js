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
    var bracket = '[](){}';
    for (var i = 0; i < input.length; i++){
        var char = input[i];
        var firstBracket = bracket.indexOf(char)
        while (firstBracket !== -1) { //first bracket exists
            var secondBracket = bracket[firstBracket+1]
            var indexOfSecond = input.indexOf(secondBracket)
            if (indexOfSecond !== -1) { //matching bracket exists
                input = input.slice(0, i) + input.slice(i+1, indexOfSecond) + input.slice(indexOfSecond+1) 
            } else {
                return false //first exists but not a matching pair
            } 
            var truthy = true
        }
    }
    return truthy;
}

module.exports = balancedParens;
