/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let numArr = [...Array(Math.min(a, b)+1).keys()]
  let gcden = numArr.reduce((acc, cur) => {
    if (a % cur === 0 && b % cur === 0) acc.push(cur)
    return acc
  }, [])
  return Math.max(...gcden)
}

module.exports = gcd;