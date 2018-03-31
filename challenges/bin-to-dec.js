/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
var Dec = 0;
    for (var i = 0; i < binary.length; i ++){
        Dec += (binary[i] * Math.pow(2, binary.length -1 -i))
    }
return Dec
}

module.exports = binToDec;

0 = (0 × 2⁰) = 0
10 = (1 × 2¹) + (0 × 2⁰) = 2
11 = (1 × 2¹) + (1 × 2⁰) = 3
100 = (1 × 2²) + (0 × 2¹) + (0 × 2⁰) = 4
101 = (1 × 2²) + (0 × 2¹) + (1 × 2⁰) = 5
0101 = (0 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰) = 5