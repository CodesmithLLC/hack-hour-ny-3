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

function balancedParens(str) {
    //for round parens
    function balancedRound(str) {
        if (!str.includes(')') && !str.includes('(')) {
            true;
        }
        if (str.length === 0) {
            return true;
        }
        if (str.indexOf('(') > str.lastIndexOf(')')) {
            return false;
        }
        return balancedParens(
            str.substring(str.indexOf('(') + 1, str.lastIndexOf(')'))
        );
    }
    //for curved ones
    function balancedCurved(str) {
        if (!str.includes('{') && !str.includes('}')) {
            true;
        }
        if (str.length === 0) {
            return true;
        }
        if (str.indexOf('{') > str.lastIndexOf('}')) {
            return false;
        }
        return balancedParens(
            str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'))
        );
    }
    //for square parens
    function balancedSquare(str) {
        if (str.length === 0) {
            return true;
        }
        if (!str.includes('[') && !str.includes(']')) {
            true;
        }
        if (str.indexOf('[') > str.lastIndexOf(']')) {
            return false;
        }
        return balancedParens(
            str.substring(str.indexOf('[') + 1, str.lastIndexOf(']'))
        );
    }
    if (balancedSquare(str) && balancedCurved(str) && balancedRound(str)) {
        return true;
    } else {
        return false;
    }
}
module.exports = balancedParens;
