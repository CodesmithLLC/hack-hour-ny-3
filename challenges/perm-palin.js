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

 function check(str) {
    var word1 = str.slice(0,(str.length)/2);
    var word2 = str.slice(str.length/2);
    if(word1 === word2) {
        return true;
    }
 }

function permPalin(str) {

    if(str.length <= 1) {
        return true;
    }

	for (var i = 0; i < str.length; i++) {
        if(check(str.slice(i))) return true;
    }
    return false;
}

module.exports = permPalin;