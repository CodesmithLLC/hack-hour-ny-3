/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    const count = str.split('').reduce((count, char) => {
        if (!count[char]) count[char] = 1
        else count[char] += 1
        return count
    }, {})

    const oddCounts = Object.values(count).filter(n => n % 2 !== 0)
    if (oddCounts.length > 1) return false
    if (oddCounts.length === 1) return oddCounts[0] === 1
    return true
}

module.exports = permPalin;