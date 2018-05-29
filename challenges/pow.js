/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  function recursion(base, power) {
    if (power === 0 ) {
      return 1
    } else {
      return base * recursion (base, (power - 1))
    }
  }
  
  if (Math.floor(power) !== power) {
    return "dont' know what to do about nth root yet"
  }
  
  if (power < 0) {
    return 1/(recursion(base, -power))
  } else {
    return recursion(base, power)
  }
}

module.exports = pow;
