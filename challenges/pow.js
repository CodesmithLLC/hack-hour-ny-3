/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    base = Math.abs(base);
    if (power === 0){      
        return 1
    } else {
        if (power === 1) return base * 1;
        return Math.abs(base * pow(base, power-1));
    } 
}

// console.log(pow(20, 2))
// console.log(pow(-2, 3))
// console.log(pow(-12, 2))
// console.log(12*12)
// console.log(pow(-100, 2))
// // console.log(100*100)
// console.log(pow(230, 0))

// console.log(pow(-2, 0))

module.exports = pow;
