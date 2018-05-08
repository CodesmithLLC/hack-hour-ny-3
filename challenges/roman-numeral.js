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
  const numerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  }
  let nextGreatestNumeral;
  let nextGreatestNumber;
  const result = [];
  while (n > 0) {
    nextGreatestNumber = Math.max(...Object.keys(numerals).filter(key => key <= n));
    nextGreatestNumeral = numerals[nextGreatestNumber];
    n -= nextGreatestNumber;
    result.push(nextGreatestNumeral);
  }
  return result.join('');
}

module.exports = romanNumeral;
