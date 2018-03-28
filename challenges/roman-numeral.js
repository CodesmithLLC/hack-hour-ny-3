/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
*
 *      1     ->    I,    1
 *      4     ->    IV,   5 - 1
 *      5     ->    V,    5
 *      6     ->    VI,   5 + 1
 *      8     ->    VIII, 5 + 3
 *      9     ->    IX,   10 -1
 *      10    ->    X,    10
 *      13    ->    XIII  10 + 3
 *      15    ->    XV    10 + 5
 *      49    ->    XLIX  - 10 + 50  -1 +10
 *      40    ->    XL,   50 - 10
 *      50    ->    L,    50 
 *      90    ->    XC,   100 - 10
 *      100   ->    C,    100
 *      400   ->    CD,   500 - 100
 *      500   ->    D,    500
 *      900   ->    CM,   1000 - 100
 *      1000  ->    M,    1000
 * 
 */
function romanNumeral(n) {
    var romanNum = '';
    var romanBase = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'};
    if (n - 900  >= 0) {
      romanNum = romanBase[1000];
       n = n - 1000
    }
    if (n - 400  >= 0) {
      romanNum = romanBase[500];
       n = n - 500
    }
    if (n - 90 >= 0) {
      romanNum = romanBase[100];
       n = n - 100
    }
    if (n - 40 >= 0) {
      romanNum = romanBase[50];
       n = n - 50
    } 
    if (n - 9 >= 0) {
      romanNum = romanBase[10];
       n = n - 10
    } 
    if (n - 4 >= 0) {
      romanNum = romanBase[5];
      n = n - 5
    } 
    while (n > 0) {
        n = n - 1
        romanNum += romanBase[1]
      }
    if (n === -100){
      romanNum = romanBase[100] + romanNum
    }
    if (n === -10){
      romanNum = romanBase[10] + romanNum
    }
    if (n === -1){
      romanNum = romanBase[1] + romanNum
    }
    return romanNum
}

module.exports = romanNumeral;
