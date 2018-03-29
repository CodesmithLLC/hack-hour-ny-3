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

function romanNumeral(num) {
  let romanArr = [1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'];
  let result = '';
  let numeral = num;

  for (let i = 0; i < romanArr.length; i += 2) {
    while (numeral >= romanArr[i]) {
      result += romanArr[i + 1];
      numeral -= romanArr[i];
    }
  }

  return result;
}

console.log(romanNumeral(1000));
module.exports = romanNumeral;
