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
  let result = '';
  let str = String(n);
  let romans = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10:'X',
    40:'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  if (str.length === 4) {
    for (let i = 0; i < str[0]; i++) {
      result += 'M';
    }

  }
  if (str.length === 3) {
    if (str[0] === '9') {
      result += 'CM';
    }
    if (str[0] === '5') {
      result += 'D';
    }
    if (str[0] === '4') {
      result += 'CD';
    }
    if (str[0] === ' 1') {
      result += 'C';
    }
  }
  if (str.length === 2) {
    if (str[0] === '9') {
      result += 'XC';
    }
    if (str[0] === ' 4') {
      result += 'L';
    }
    if (str[0] === '1') {
      result += 'X';
    }
  }
  if (str.length === 1) {
    if (str[0] === '9') {
      result += 'IX';
    }
    if (str[0] === '5') {
      result += 'V';
    }
    if (str[0] === '4') {
      result += 'IV';
    }
    if (str[0] === '1') {
      result += 'I';
    }
  }
  // let result = '';
  // for (let i = 0; i < n; i++) {
  //   result += 'I';
  // }
  return result;
}

console.log(romanNumeral(1010));
module.exports = romanNumeral;
