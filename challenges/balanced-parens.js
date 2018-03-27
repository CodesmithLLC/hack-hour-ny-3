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


class ParenCounter {
    constructor() {
        this.parenCount = {
            '{': 0,
            '(': 0,
            '[': 0,
        }
        this.lastParen = []
        this.isBalanced = true
    }

    addChar(char) {
        if (this.isOpeningParen(char)) this.addOpeningParen(char)
        if (this.isClosingParen(char)) this.addClosingParen(char)
    }

    isOpeningParen(char) {
        return char === '{' || char === '(' || char === '['
    }

    isClosingParen(char) {
        return char === '}' || char === ')' || char === ']'
    }

    addOpeningParen(paren) {
        this.parenCount[paren] += 1
        this.lastParen.unshift(paren)
    }

    addClosingParen(paren) {
        const openingParen = this.getOpeningParen(paren)
        if (openingParen !== this.lastParen[0]) this.isBalanced = false
        if (this.parenCount[openingParen] === 0) this.isBalanced = false
        this.parenCount[openingParen] -= 1
        this.lastParen.shift()

    }

    getOpeningParen(openingParen) {
        const opposites = {
            '}': '{',
            ')': '(',
            ']': '['
        }
        return opposites[openingParen]
    }

    getTotalParenCount() {
        return this.parenCount['('] + this.parenCount['{'] + this.parenCount['[']
    }

}


function balancedParens(input) {
    const chars = input.split('')
    const parenCounter = new ParenCounter()
    chars.forEach((char) => parenCounter.addChar(char))
    return (
        parenCounter.getTotalParenCount() === 0
        && parenCounter.isBalanced === true
    )

}

module.exports = balancedParens;
