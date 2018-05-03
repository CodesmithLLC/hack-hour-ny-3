/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if (a === 0 || b === 0) {
        return Math.max(a,b)
    }
    var min = Math.min(a,b) // decrease the amount time the loop runs
    for (var i = min; i > 0; i-- ) {
      if (a % i === 0 && b % i === 0) {
        return i
      }
    }
}

console.log(gcd(10, 8))


module.exports = gcd;