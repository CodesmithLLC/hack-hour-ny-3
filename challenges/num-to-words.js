// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2 483 579 411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */
const nums = { '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine', 
'10': 'Ten', '20': 'Twenty', '30': 'Thirty', '40': 'Forty', '50': 'Fifty', '60' : 'Sixty', '70': 'Seventy', '80': 'Eighty', '90': 'Ninety', }
function numToWords(num) {

  let numStr = `${num}`;
  let pointer = 0;
  let result = '';
  let length = numStr.length;

  while (length) {
    let curr = numStr[pointer];
    let current = curr + '0'.repeat(length - 1);
    
    if (current.length === 4) result += nums[curr] + 'Thousand';
    if (current.length === 3) result += nums[curr] + 'Hundred';
    if (current.length === 2) result += nums[curr+'0'];
    if (current.length === 1) result += nums[curr];
    
    num -= parseInt(current, 10);

    if (num === 0) length = 0;
    else {
      numStr = `${num}`;
      length = numStr.length;
    }
  }

  return result;
}

console.log(numToWords(0))
console.log(numToWords(143))
console.log(numToWords(999))
console.log(numToWords(2999))

module.exports = numToWords;
