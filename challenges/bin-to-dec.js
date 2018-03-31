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

function decToBin(dec) {
  let bin ='';
  let digNum = Math.floor(Math.pow(dec, 1/2)) ;
  while(digNum >= 0){
    let binDig = Math.pow(2,digNum)
    if(dec>=binDig){
      bin += '1';
      dec -= binDig
    } 
    else bin += '0';
    digNum --;
  }
  return bin
}

module.exports = binToDec;
