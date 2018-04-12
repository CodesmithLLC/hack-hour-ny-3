/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
    // trade open: 9:30
    // Array -> Number

    // calculating difference involves comparing purchase on one minute
    // versus difference on the rest,
    // doing that for each price,
    // and getting the max difference

    // purchase comes first
    let maxDiff = 0;
    let currentLow = 0;
    for (let i = 0; i < stock_prices_yesterday.length; i++) {
        let price = stock_prices_yesterday[i];

        if (price < currentLow) {
            currentLow = price;
        }

        if (price - currentLow > maxDiff) {
            maxDiff = price - currentLow;
        }

    }
    return maxDiff;
}

module.exports = bestProfit;
