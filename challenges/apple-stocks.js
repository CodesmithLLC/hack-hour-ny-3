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
  
}

module.exports = bestProfit;




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
 
 
// [ 8, 69, 77, 81, 28, 61, 28, 10, 93, 95 ]

function bestProfit(prices) {
  let max = [prices[0], 0];
  let min = [prices[0], 0];
  let profit = 0
  for (let i = 1; i < prices.length; i += 1){
    //max after min
    if (prices[i] > max[0] && i > min[1]){
      max = [prices[i], i]
    }
    //min after max
    if (prices[i] < min[0] && i > max[1]){
       profit = max[0] - min[0]
       
       
    }
    //min before max 
    if (prices[i] < min[0] && i < max[1]){
      min = [prices[i], i]
    }
  }
  console.log(prices, min, max)
}

bestProfit([ 200, 8, 69, 77, 81, 28,100, 7, 61, 28, 10, 93, 95 ])

// const arr = [];

// for (let i = 0;i < 10; i += 1){
//   arr.push(Math.floor(Math.random() * 100));
// }
// console.log(bestProfit(arr))











