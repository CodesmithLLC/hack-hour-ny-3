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
    let digits = binary.split('');
    let sum =0;
    for(let i=digits.length-1;i>=0; i--){
      // console.log('gig',digits.length-i)
      sum += digits[i]*Math.pow(2,digits.length-1-i)
    }
    return sum
}

module.exports = binToDec;
