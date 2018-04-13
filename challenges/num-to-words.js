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
  let numWords = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  let tens = ['Zero', 'Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  let mags = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion'];
  if (num < 20) return numWords[num];
  if (num < 100) {
    const lastDigit = num % 10;
    if (lastDigit === 0) return tens[Math.floor(num/10)];
    return tens[Math.floor(num/10)] + numWords[num % 10];
  }
  if (num < 1000) {
    return numWords[Math.floor(num/100)] + 'Hundred' + numToWords(num % 100);
  }
  if (num > 0) {
    const power = Math.ceil(Number(num).toString()/3);

    return numToWords(Math.floor(num/1000)) + mags[power - 1];
  }
}

module.exports = numToWords;
