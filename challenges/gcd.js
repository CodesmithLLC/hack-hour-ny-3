/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (b === 0) return a;
  return a < b ? gcd(b, a % b) : gcd(a, b % a);
}

module.exports = gcd;