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
    binary = binary.split('').map(num => Number.parseInt(num, 10)).reverse()
    return binary.reduce(
      (decimal, digit, index) => {
        // console.log(digit)
        return decimal + digit * Math.pow(2, index)
      },
    0)
}
module.exports = binToDec;
