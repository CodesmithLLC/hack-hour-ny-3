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
    let sNum = n.toString();
    let digits = sNum.split('');
    let romanOutput = [];
    let units = {
      3:100,
      2:10,
    }
    let basics={
        1:'I',
        5:'V',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M'
    }
    
    for(let i=0; i<digits.length; i++){
      let unit
      if(digits.length-i>1) {
        unit = units[digits.length-i]
      }
      else unit =1;
      if(digits[i]==1 || digits[i]==5) {
        digits[i]
        romanOutput.push(basics[unit])
      }
      else if(digits[i]>1 && digits[i]<5){
        romanOutput.push(basics[(5-digits[i])*unit])
        romanOutput.push(basics[5*unit])
      }
      else if(digits[i]>5 && digits[i]<10){
        romanOutput.push(basics[5*unit])
        romanOutput.push(basics[(digits[i]-5)*unit])
      }
    }
    return romanOutput.join('');
}

module.exports = romanNumeral;
