/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, calc = base) {
    let negative = false;
    if(power === 0) return 1;
    if(power < 0) {
        power = -power;
        negative = true
    }
    while(power>1){
        calc = calc*base;
        power --;
        pow(base,power,calc);
    }
    if(negative) return 1/calc;
    else return calc;
}


//Without Recurison
// function pow(base, power) {
//     if(power === 0) return 1;
//     let calc = base;
//     while(power>1){
//       calc = calc*base
//       power --;
//     }
//     return calc;
// }

module.exports = pow;
