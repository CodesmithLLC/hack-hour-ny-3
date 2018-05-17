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
    var num = 0;
    function bin(binary) {
        if(binary === '') {
            return num;
        }
        if(binary[0] === '1') {
            num += Math.pow(2, binary.length - 1);
        }
        return bin(binary.slice(1));
    }   
    
    return bin(binary);
}

console.log(binToDec('0'))   //-> 0
console.log(binToDec('11'))  //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('0101')) //-> 5

module.exports = binToDec;
