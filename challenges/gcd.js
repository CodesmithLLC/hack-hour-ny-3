/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    var max = Math.max(a,b);
    var greatestDivisor = 1;
    for (var i = 1; i <= Math.round(max / 2); i++) {
        if((a % i === 0) && (b % i === 0) && i > greatestDivisor) {
            greatestDivisor = i;
        }
    }
    return greatestDivisor;
}

module.exports = gcd;