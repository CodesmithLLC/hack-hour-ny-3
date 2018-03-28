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

const romans = {
  M:1000,
  CM:900,
  D:500,
  CD:400,
  C:100,
  XC:90,
  L:50,
  XL:40,
  X:10,
  IX:9,
  V:5,
  IV:4,
  I:1
};

function romanNumeral(n) {
  let roman = '';

  for ( let i in romans ) {
    while ( n >= romans[i] ) {
      roman += i;
      n -= romans[i];
    }
  }

  return roman;
}

console.log(romans);

console.log(romanNumeral(0), ' should be \'\' ');
console.log(romanNumeral(1), ' should be \'I\' ');
console.log(romanNumeral(3), ' should be \'III\' ');
console.log(romanNumeral(4), ' should be \'IV\' ');
console.log(romanNumeral(5), ' should be \'V\' ');
console.log(romanNumeral(6), ' should be \'VI\' ');

module.exports = romanNumeral;
