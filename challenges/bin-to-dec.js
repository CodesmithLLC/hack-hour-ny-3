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

 //(y === '1') ? x + Math.pow(2, i) : x;

function binToDec(binary, x = 0) {
  if (binary.length === 0) return x;

  let i = binary.length - 1;
  let current = binary[0];
  let next = binary.slice(1);

  return (current === '1') ? 
  binToDec(next, x  + Math.pow(2, i)) : 
  binToDec(next, x);
}

//console.log(binToDec('0'));
console.log(binToDec('0101'));

module.exports = binToDec;
