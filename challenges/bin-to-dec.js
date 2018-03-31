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
 // return parseInt(binary, 2);
 let strippedBinary = stripZeros(binary);
 let reversedBinary = strippedBinary.split('').reverse().join('');
 let len = strippedBinary.length;
 let dec = 0;

 for (var i = len; i > 0; i--) {
   if (reversedBinary[i] === '1') {
     dec += Math.pow(2, i);
   }
 }

 dec += +reversedBinary[0];

 return dec;
}

function stripZeros(binary) {
 // Number -> Number
 let i = 0;
 while (binary[i] === '0') {
   i++;
 }

 return binary.substring(i);
}

// console.log(binToDec('101'))
// console.log(binToDec('0000100001'))
// console.log(stripZeros('0101'));
module.exports = binToDec;
