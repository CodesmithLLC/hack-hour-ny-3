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
    let arr = binary.split('');
    while (arr[0] === "0") {
        arr.shift();
    }
    for (let i = 0; i < arr.length; i += 1) {
        console.log(arr[i]);
        arr[i] = parseInt(arr[i]);
        arr[i] = i * Math.pow(2, arr[i]);
    }
    return arr.reduce((acc, el) => {
        return (acc += el);
    });
}


module.exports = binToDec;
