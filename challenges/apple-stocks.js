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
// const stocks = [30, 5,10,15,20, 4, 30];
function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length < 2) return 0;
  if (stock_prices_yesterday.length === 2 && [1] <= stock_prices_yesterday[0]) return 0;

  let max = null;

  for (let i = 0; i < stock_prices_yesterday.length - 1; i++) {
    let curr = stock_prices_yesterday[i];
    for (let j = i + 1; j < stock_prices_yesterday.length; j++) {
      let next = stock_prices_yesterday[j];
      let difference = next - curr;
      if (max === null || next - curr >= max) max = difference;
    }
  }

  return max;
}
// console.log(bestProfit(stocks));
module.exports = bestProfit;
