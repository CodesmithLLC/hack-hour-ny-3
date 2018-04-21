/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let greatestComm = 1, endNum;
    a > b ? endNum = b : endNum = a;
    for (var i = 1; i <= endNum; i++) {
        if (a % i === 0 && b % i === 0 && i >= greatestComm) greatestComm = i;
    }

    return greatestComm;
}

module.exports = gcd;