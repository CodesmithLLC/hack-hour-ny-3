/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    return helper(base, power)
    function helper(base, power, accumulator = base){
        if(power === 1) return accumulator;
        if(power === 0) return 1
        if(power > 1){
            return power % 2 === 0 ?
                helper(base, power / 2, accumulator * accumulator)
                : helper(base, power - 1, accumulator * base)
        }
        if(power < 0) return 1 / helper(base, Math.abs(power)) 
    }

}

module.exports = pow;
