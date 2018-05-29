/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  let num = n
  let numArr = []
  let mappings = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I"
  }

  function loop(num, letter, lim) {
    while (num >= lim) {
      numArr.push(letter);
      num = num - lim
    }
  }
  
  for (var key in mappings) {
    loop(num, mappings[key], key)
  } 
  while (num >= 1000) {
    numArr.push("M");
    num = num - 1000
  }
  
  while (num >= 500) {
    numArr.push("D");
    num = num - 500
  }
  
  while (num >= 100) {
    numArr.push("C");
    num = num - 100
  }
  
  while (num >= 50) {
    numArr.push("L");
    num = num - 50
  }
  
  while (num >= 10) {
    numArr.push("X");
    num = num - 10
  }
  
  while (num >= 5) {
    numArr.push("V");
    num = num - 5
  }

  while (num >= 1) {
    numArr.push("I");
    num = num - 1
  }
  
  numArr = numArr.join("")
  
  var replace = {
    'DCCCC' : 'CM',
    'CCCC' : 'CD',
    'LXXXX' : 'XC',
    'XXXX'  : 'XL',
    'VIIII' : 'IX',
    'IIII'  : 'IV' }

  for (var key in replace) {
    if (numArr.indexOf(key) > 0) {
      numArr = numArr.replace(key, replace[key])
    }
  }
  
  return numArr

}


module.exports = romanNumeral;
