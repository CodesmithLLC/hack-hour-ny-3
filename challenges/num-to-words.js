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
    if (num === 0) return 'Zero';
    var numString = "";

    var bigNumObj = {'1000000000' : "Billion", '1000000': 'Million', '1000': 'Thousand'};
        for (var key in bigNumObj) {
            console.log(key);
            // if(num >= bigNum) {
            //     numString += smallNums(Math.floor(num / bigNum));
            //     numString += bigNumObj[bigNum];
            //     num -= bigNum * (Math.floor(num / bigNum));
            // }
        }

    // numString += smallNums(num);
    // return numString;
}

function smallNums(num) {
    var onesObj = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten'};
    var teensObj = {11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Ninteen'};
    var tensObj = {20: 'Twenty', 30: 'Thirty', 40: 'Fourty', 50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', 90: 'Ninty', 100: 'Hundred'};
    var numString = "";

    while(num > 0) {
        if (num > 200) {
            var temp = ((Math.floor(num / 100)));
            numString += onesObj[temp];
            numString += tensObj[100];
            num -= temp * 100;
        } else if(num >= 20 && num <= 100) {
            var temp = ((Math.floor(num / 10)) * 10) > 100 ? 100 : ((Math.floor(num / 10)) * 10);
            numString += tensObj[temp];
            num -=  temp;
        } else if(num > 10 && num < 20) {
            numString += teensObj[num];
            num -=  num;
        } else {
            numString += onesObj[num];
            num -=  num;
        }
    }
    return numString;
}

// console.log(numToWords(0)); //-> 'Zero'
// console.log(numToWords(43)); //-> 'FortyThree'
// console.log(numToWords(2999)); //-> 'TwoThousandNineHundredNintyNine'
// console.log(numToWords(15)); //-> 'Fifteen'
console.log(numToWords(2483579411)); //-> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
// console.log(numToWords(300525151340440)); //-> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
// console.log(numToWords(92120000000000000)); //-> 'NintyTwoQuadrillionOneHundredTwentyTrillion'

module.exports = numToWords;
