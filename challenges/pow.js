/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

  function absolutePower(base, power) {
    if (power === 0) return 1;
    power = power < 0 ? power * -1 : power;
    return base * absolutePower(base, power - 1);
  }

  let abs = absolutePower(base, power);

  return power < 0 ? 1/abs : abs;

}

module.exports = pow;
