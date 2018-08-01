// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

// function numToWords(num) {
//   const dict = {
//     0: 'Zero',
//     1: 'One',
//     2: 'Two',
//     3: 'Three',
//     4: 'Four',
//     5: 'Five',
//     6: 'Six',
//     7: 'Seven',
//     8: 'Eight',
//     9: 'Nine',
//     10: 'Ten',
//     11: 'Eleven',
//     12: 'Twelve',
//     13: 'Thirteen',
//     14: 'Fourteen',
//     15: 'Fifteen',
//     16: 'Sixteen',
//     17: 'Seventeen',
//     18: 'Eighteen',
//     19: 'Nineteen',
//     20: 'Twenty',
//     30: 'Thirty',
//     40: 'Forty',
//     50: 'Fifty',
//     60: 'Sixty',
//     70: 'Seventy',
//     80: 'Eighty',
//     90: 'Ninty',
//   };
//   let result = '';
//   let str = String(num);
//
//   while (str.length !== 0) {
//     if (str.length === 18) {
//       result += numToWords(str.slice(0, 3));
//       result += 'Quadrillion';
//       if (str.slice(3) !== '000000000000000') result += numToWords(String(Number(str.slice(3))));
//       str = str.slice(18);
//     }
//     if (str.length === 17) {
//       result += numToWords(str.slice(0, 2));
//       result += 'Quadrillion';
//       if (str.slice(2) !== '000000000000000') result += numToWords(String(Number(str.slice(2))));
//       str = str.slice(17);
//     }
//     if (str.length === 16) {
//       result += dict[Number(str[0])];
//       result += 'Quadrillion';
//       if (str.slice(1) === '000000000000000') str = str.slice(16);
//       else str = String(Number(str.slice(1)));
//     }
//     if (str.length === 15) {
//       result += numToWords(str.slice(0, 3));
//       result += 'Trillion';
//       if (str.slice(3) !== '000000000000') result += numToWords(String(Number(str.slice(3))));
//       str = str.slice(15);
//     }
//     if (str.length === 14) {
//       result += numToWords(str.slice(0, 2));
//       result += 'Trillion';
//       if (str.slice(2) !== '000000000000') result += numToWords(String(Number(str.slice(2))));
//       str = str.slice(14);
//     }
//     if (str.length === 13) {
//       result += dict[Number(str[0])];
//       result += 'Trillion';
//       if (str.slice(1) === '000000000000') str = str.slice(13);
//       else str = String(Number(str.slice(1)));
//     }
//     if (str.length === 12) {
//       result += numToWords(str.slice(0, 3));
//       result += 'Billion';
//       if (str.slice(3) !== '000000000') result += numToWords(String(Number(str.slice(3))));
//       str = str.slice(12);
//     }
//     if (str.length === 11) {
//       result += numToWords(str.slice(0, 2));
//       result += 'Billion';
//       if (str.slice(2) !== '000000000') result += numToWords(String(Number(str.slice(2))));
//       str = str.slice(11);
//     }
//     if (str.length === 10) {
//       result += dict[Number(str[0])];
//       result += 'Billion';
//       if (str.slice(1) === '000000000') str = str.slice(10);
//       else str = String(Number(str.slice(1)));
//     }
//     if (str.length === 9) {
//       result += numToWords(str.slice(0, 3));
//       result += 'Million';
//       if (str.slice(3) !== '000000') result += numToWords(String(Number(str.slice(3))));
//       str = str.slice(9);
//     }
//     if (str.length === 8) {
//       result += numToWords(str.slice(0, 2));
//       result += 'Million';
//       if (str.slice(2) !== '000000') result += numToWords(String(Number(str.slice(2))));
//       str = str.slice(8);
//     }
//     if (str.length === 7) {
//       result += dict[Number(str[0])];
//       result += 'Million';
//       if (str.slice(1) === '000000') str = str.slice(7);
//       else str = String(Number(str.slice(1)));
//     }
//     if (str.length === 6) {
//       result += numToWords(str.slice(0, 3));
//       result += 'Thousand';
//       if (str.slice(3) !== '000') result += numToWords(String(Number(str.slice(3))));
//       str = str.slice(6);
//     }
//     if (str.length === 5) {
//       result += numToWords(str.slice(0, 2));
//       result += 'Thousand';
//       if (str.slice(2) !== '000') result += numToWords(String(Number(str.slice(2))));
//       str = str.slice(5);
//     }
//     if (str.length === 4) {
//       result += dict[Number(str[0])];
//       result += 'Thousand';
//       if (str.slice(1) === '000') str = str.slice(4);
//       else str = String(Number(str.slice(1)));
//     }
//     if (str.length === 3) {
//       result += dict[Number(str[0])];
//       result += 'Hundred';
//       if (str.slice(1) === '00') str = str.slice(3);
//       else str = String(Number(str.slice(1)));
//     }
//     if (str.length === 2) {
//       if (Number(str[0]) >= 2) {
//         result += dict[Number(str) - Number(str[1])];
//         if (str[1] === '0') str = str.slice(2);
//         else str = str.slice(1);
//       } else {
//         result += dict[str];
//         str = str.slice(2);
//       }
//     }
//     if (str.length === 1) {
//       result += dict[str];
//       str = str.slice(1);
//     }
//   }
//   // here we go
//   return result;
// }

var ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];
var PLACES = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

function numToWords(num) {
  if (!num) return 'Zero';
  let str = String(num);
  // make sure the length is divisible by 3
  while (str.length % 3) {
    str = '0' + str;
  }
  return recurringNum(str)
         .replace('TenOne', 'Eleven')
         .replace('TenTwo', 'Twelve')
         .replace('TenThree', 'Thirteen')
         .replace('TenFour', 'Fourteen')
         .replace('TenFive', 'Fifteen')
         .replace('TenSix', 'Sixteen')
         .replace('TenSeven', 'Seventeen')
         .replace('TenEight', 'Eighteen')
         .replace('TenNine', 'Nineteen');
}

function recurringNum(str) {
  if (!str.length) return '';
  var nextNums = str.slice(0,3);
  var nextWords;
  if (nextNums === '000') {
    nextWords = '';
  } else {
    var placesIndex = Math.floor(str.length / 3) - 1;
    nextWords = parseThree(nextNums) + PLACES[placesIndex];
  }
  return nextWords + recurringNum(str.slice(3));
}

function parseThree(digits) {
  var words;
  if (digits >= 100) {
    words = ONES[digits[0]] + 'Hundred' + TENS[digits[1]] + ONES[digits[2]];
  } else if (digits >= 10 ) {
    words = TENS[digits[1]] + ONES[digits[2]];
  } else {
    words = ONES[digits[2]];
  }
  return words;
}

module.exports = numToWords;
