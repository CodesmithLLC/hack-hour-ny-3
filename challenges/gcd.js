/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */


function gcd(a, b, i = 1) {
    const [smaller, larger] = a < b ? [a, b] : [b, a]
    const complement = smaller % i === 0 ? (smaller / i) : false
    if (complement) return larger % complement === 0 ? complement : gcd(a, b, i + 1)
    else return gcd(a, b, i + 1)
}

module.exports = gcd;