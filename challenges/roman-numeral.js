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

 //Only I, X, C, and M can be repeated; V, L, and D cannot be
 //Repeating a numeral up to three times represents addition of the number
 //Writing numerals that decrease from left to right represents addition of the numbers
function romanNumeral(n) {
    const values = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9,V: 5, IV: 4, I: 1};
    //hard coded values will automatically return, includes the few exxceptions for the subtraction rule
    let result = '';
    for (var key in values) { //for every key in values
        while (n >= values[key]) { //while n is greater than or equal to the value
            result += key; //add the letters to the result
            n -= values[key]; //subtract the value from n
        }
    }

    return result;
}

module.exports = romanNumeral;
