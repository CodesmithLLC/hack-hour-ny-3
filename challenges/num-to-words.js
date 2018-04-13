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

const digits = {
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
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
    1000000000000: 'Trillion',
}

function numToWords(num, string = '') {
    const trillion = 1000000000000
    const billion = 1000000000
    const million = 1000000

    let count = Math.floor(num / trillion)
    if (count) string += numToWords(count) + digits[trillion]
    num = num % trillion

    count = Math.floor(num / billion)
    if (count) string += numToWords(count) + digits[billion]
    num = num % billion

    count = Math.floor(num / million)
    if (count) string += numToWords(count) + digits[million]
    num = num % million

    count = Math.floor(num / 1000)
    if (count) string += numToWords(count) + digits[1000]
    num = num % 1000

    count = Math.floor(num / 100)
    if (count) string += numToWords(count) + digits[100]
    num = num % 100

    count = Math.floor(num / 10)
    if (count && count >= 2) {
        string += digits[count * 10] + numToWords(num % 10)
        num = num % 10
    } else if (count) {
        string += digits[num]
        num = 0
    }

    if (num) string += digits[num]

    return string
}


module.exports = numToWords;
