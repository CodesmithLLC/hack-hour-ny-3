/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  function _pow(base, power) {
    if (power === 0) return 1;
    return base*pow(base, power - 1);
  }
  return power > 0 ? _pow(base, power) : 1 / _pow(base, -power);
}

module.exports = pow;
