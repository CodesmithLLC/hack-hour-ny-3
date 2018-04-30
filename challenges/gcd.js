/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    for (let i = a; i >= 0; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
    return false;
}

module.exports = gcd;