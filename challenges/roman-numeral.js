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
  var number = n;
  var romanNumerals = {
  1 : 'I',
  4 : 'IV' ,
  5: 'V',
  9: 'IX' ,
  10 : 'X',
  40 : 'XL' ,
  50 : 'L',
  90 : 'XC' ,
  100 : 'C',
  400 : 'CD' ,
  500 : 'D',
  900 : 'CM' ,
  1000 : 'M'
};

  var arr = Object.keys(romanNumerals);
    var ans = '';
    while (number > 0) {
      for (var i = 0; i < arr.length; i++) {
        var key = arr[i];
        var nextKey = arr[i + 1];
        if ((number >= key && number < nextKey) || nextKey === undefined) {
          ans += romanNumerals[key];
          number -= key;
        }
      }
    }
    return ans;
}

module.exports = romanNumeral;
