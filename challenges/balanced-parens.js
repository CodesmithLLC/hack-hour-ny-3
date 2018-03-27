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
function isEven(num) {
    return (num % 2 === 0 && num >= 0);
}

function balancedParens(input) {
    var bracketChars = '(){}[]'.split('');
    var string = '';
    var curly = 0;
    var paren = 0;
    var bracket = 0;

    for (var i = 0; i < input.length; i++) {
        if (bracketChars.includes(input[i])) {
            string += input[i];
            if (input[i] === '[' || input[i] === ']') {
                if (bracket === 0 && input[i] === '[') {
                    bracket += 1;
                } else {
                    bracket -= 1;
                }

                if ((input[i - 1] === '{' && input[i + 1] === '}') || (input[i - 1] === '(' && input[i + 1] === ')')) {
                    bracket -= 1;
                }
            } else if (input[i] === '(' || input[i] === ')') {
                if (paren === 0 && input[i] === '(') {
                    paren += 1;
                } else {
                    paren -= 1;
                }

                if ((input[i - 1] === '{' && input[i + 1] === '}') || (input[i - 1] === '[' && input[i + 1] === ']')) {
                    paren -= 1;
                }
            } else if (input[i] === '{' || input[i] === '}') {
                if (curly === 0 && input[i] === '{') {
                    curly += 1;
                } else {
                    curly -= 1;
                }

                if ((input[i - 1] === '[' && input[i + 1] === ']') || (input[i - 1] === '(' && input[i + 1] === ')')) {
                    curly -= 1;
                }
            }
        }
    }

    if (!isEven(string.length)) {
        return false;
    }
    
    return (isEven(curly) && isEven(paren) && isEven(bracket));
}

module.exports = balancedParens;
