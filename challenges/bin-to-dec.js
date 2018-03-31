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
  function binToDec(binary) {
    let total = 0; // Accumulator for output
    let power = 1; // Conversion factor for digit column
    for (let i = binary.length - 1, j = 1; i >= 0; i -= 1) {
      total += +binary[i] * power;
      power *= 2;
    }
    return total;
  }
}

module.exports = binToDec;
