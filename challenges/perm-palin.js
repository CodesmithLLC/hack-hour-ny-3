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
    let storage = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (storage[char]) {

        } else {

        }
    }
}

module.exports = permPalin;