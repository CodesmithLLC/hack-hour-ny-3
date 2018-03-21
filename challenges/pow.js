/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    base = Math.abs(base);
    if(power <= 1){
        return base * 1;
    }

    return Math.abs(base * pow(base, power-1));
}


module.exports = pow;
