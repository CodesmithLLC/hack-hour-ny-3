/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b, i = Math.max(a, b)) {
  if ( a % i === 0 && b % i === 0 ) return i
  else if ( i === 1) i
  else return gcd(a, b, i -= 1)
}

module.exports = gcd;