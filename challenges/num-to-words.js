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

function numToWords(num) {
  const dict = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Fourty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
  }
  if (dict[num] !== undefined) {
    return dict[num];
  }
  let result = '';
  let stringed = String(num);
  while (stringed.length > 0) {
    if (dict[stringed] !== undefined && stringed[0] !== '0') {
      result += dict[stringed];
      return result;
    }
    if (stringed[0] === '0') {
      stringed = stringed.slice(1);
      numToWords(Number(stringed));
    }
    // if (stringed.length === 7) {
    //   result += numToWords(Number(stringed[0])) + 'Million';
    //   if (stringed[1] === '0') {
    //     stringed = stringed.slice(2);
    //   }
    //
    // }
    if (stringed.length === 6) {
      result += numToWords(stringed.slice(0, 3)) + 'Thousand';
      stringed = stringed.slice(3);
    }
    if (stringed.length === 5) {
      result += numToWords(stringed.slice(0, 2)) + 'Thousand';
      stringed = stringed.slice(2);
    }
    if (stringed.length === 4) {
      result += dict[stringed[0]] + 'Thousand';
    }
    if (stringed.length === 3) {
      result += numToWords(stringed[0]) + 'Hundred' + numToWords(Number(stringed.slice(1)));

    }

    if (stringed.length < 3) {
      let first = Number(stringed.slice(-1));
      let second = Number(stringed) - first;
      if (first === 0) {
        result += dict[second];
      } else {
        result += dict[second] + dict[first];
      }
      return result;
    }
    stringed = stringed.slice(1);
  }
  return result;
}

console.log(numToWords(901));
module.exports = numToWords;
