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
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    if (numerals[n]) return numerals[n];

    let remainder = n;
    let romanArr = [];
    let topLimit = 0;

    console.log('JHi')
    while (remainder > 0){
        for (key in numerals) {
            if (remainder % parseInt(key) === 0){
                topLimit = parseInt(key);
            } else if (parseInt(key) > topLimit){
                console.log("in while", remainder, "test")
                romanArr.push(numerals[topLimit]);
                remainder = remainder - parseInt(key); 
            }
        }
        
    }

    console.log(romanArr)
}

// console.log(romanNumeral(1))
// console.log(romanNumeral(3))
console.log(romanNumeral(30))
// console.log(romanNumeral(12))
console.log(romanNumeral(15))
// console.log(romanNumeral(18))

module.exports = romanNumeral;
