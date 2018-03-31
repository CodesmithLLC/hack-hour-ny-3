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
    if (binary === '0') {
        return 0;
    }

    if (binary === '1') {
        return 1;
    }
    
    var decimal = 0;
    
    var arr = binary.split('').reverse();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            decimal += 0;
        }
        
        if (arr[i] === '1') {
            decimal += Math.pow(2, i);
        }
    }

    return decimal;
}


module.exports = binToDec;
