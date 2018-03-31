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
  let bin = binary.split("").map(a => {return parseInt(a)})
  return bin.reduce((a, b) => {
    return a = 2 * a + b
  })
}

function decToBin(dec) {
  let bin = ""
  let num = dec
  while (num > 0) {
    bin = bin.concat(num % 2)
    num = Math.floor(num/2)
  }
  return bin = bin.split("").reverse().join("")
}

module.exports = binToDec;
