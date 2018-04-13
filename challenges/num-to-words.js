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
    let wordArr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    let teenArr = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let tenArr = ['Teens', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
  
    //teen special case
    if (10 < num < 20) {
        num = num - 10;
        for (let i = 0; i < teenArr.length; i += 1){
            if (num === i) return teenArr[i];
        }
    }

    if (num < 10) {
        for (let i = 0; i < wordArr.length; i += 1){
            if (num === i) return wordArr[i];
        }
    }

    if (num >= 20) {
        for (let i = 1; i < tenArr.length; i += 1) {
            let multiply = i + 1;
            if ((10 * multiply) < num && num < 10 * (multiply + 1)){
                console.log('number is between', tenArr[i], tenArr[i+1]);
            }
        } 
    }

}


// console.log(numToWords(5));

console.log(numToWords(35));

module.exports = numToWords;
