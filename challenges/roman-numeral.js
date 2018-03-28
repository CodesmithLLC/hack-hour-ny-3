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
   // Number -> String
   // find closest roman 'interval' equal to or less than string
   // append to string and subtract its value from supplied number
   // recursive solution?

   let romanIntervals = {
     'I': 1,
     'IV': 4,
     'V': 5,
     'IX': 9,
     'X': 10,
     'XL': 40,
     'L': 50,
     'XC': 90,
     'C': 100,
     'CD': 400,
     'D': 500,
     'CM': 900,
     'M': 1000,
   };

   // how to find nearest smaller or equal interval in object;
   let romanStr = '';
   let smallestPositiveDifference = null;
   let romanVal;

   if (n === 0) {
     return '';
   }

   for (let key in romanIntervals) {
     let diff = n - romanIntervals[key];
     if (diff >= 0) {
       if (smallestPositiveDifference === null || diff < smallestPositiveDifference) {
         smallestPositiveDifference = diff;
         romanVal = key;
         romanStr += romanVal;
       }
     }
   }

   return romanStr += romanNumeral(n - romanIntervals[romanVal]);
 }

module.exports = romanNumeral;
