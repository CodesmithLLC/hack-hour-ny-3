/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(power < 0) power = -power;
    if(power < 1) return 1;
    return base * pow(base, power-1);
}

module.exports = pow;

console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));