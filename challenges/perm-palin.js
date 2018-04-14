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
    array = str.split('');
    while (array.length > 1) {
        if (array.lastIndexOf(array[0]) === 0) { return false }
        array.splice(array.lastIndexOf(array[0]), 1);
        array.shift();
    }
    return true;
}

module.exports = permPalin;