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
    let binArr = binary.split('');

    let accumulator = 0;
    for (let i = 0; i < binArr.length; i+=1){
        console.log(accumulator, binArr[i])
        accumulator = 2 * accumulator + Number(binArr[i]);
    }

    return accumulator;
  

}

//passing all of these
// binToDec('101');
// binToDec('0101');
// binToDec('100')
// binToDec('11')
// binToDec('0')

module.exports = binToDec;
