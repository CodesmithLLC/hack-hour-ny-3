/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 *
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  const handValue = {
    four: 0,
    full: 1,
    straight: 2,
    three: 3,
    two: 4,
    one: 5,
    high: 6,
  };

  const count1 = hand1.reduce((acc, curr) => {
    if (acc[curr] === undefined) acc[curr] = 1;
    else acc[curr] += 1;
    return acc;
  }, {});
  const count2 = hand2.reduce((acc, curr) => {
    if (acc[curr] === undefined) acc[curr] = 1;
    else acc[curr] += 1;
    return acc;
  }, {});

  const countArr1 = Object.values(count1);
  const countArr2 = Object.values(count2);

  function findValue(arr, obj) {
    let result = null;
    if (arr.includes(4)) result = handValue.four;
    else if (arr.includes(3) && arr.includes(2)) result = handValue.full;
    else if (arr.length === 5) {
      const sorted = Object.keys(obj).map(key => Number(key)).sort((a, b) => a - b);
      const first = sorted[0];
      if (
        sorted[1] === first + 1 &&
        sorted[2] === first + 2 &&
        sorted[3] === first + 3 &&
        sorted[4] === first + 4
      ) result = handValue.straight;
      else result = handValue.high;
    } else if (arr.includes(3)) result = handValue.three;
    else if (arr.indexOf(2) !== arr.lastIndexOf(2)) result = handValue.two;
    else if (arr.includes(2)) result = handValue.one;
    else result = handValue.high;
    return result;
  }

  const result1 = findValue(countArr1, count1);
  const result2 = findValue(countArr2, count2);

  if (result1 < result2) return 'Player 1 wins';
  else if (result1 > result2) return 'Player 2 wins';
  else if (result1 === result2) {
    let max1 = null;
    let max2 = null;
    hand1.forEach((el, i) => {
      if (max1 === null || max1 <= el) max1 = el;
      if (max2 === null || max2 <= hand2[i]) max2 = hand2[i];
    });
    if (max1 > max2) return 'Player 1 wins';
    if (max1 < max2) return 'Player 2 wins';
    return 'Draw';
  }
}

console.log(poker([3,5,5,5,2], [4,6,7,8,8]));
console.log(poker([2,4,5,9,14],[2,4,5,9,10]));
console.log(poker([2,2,11,13,14],[14,13,12,11,4]));
console.log(poker([2,3,13,13,13],[4,14,5,14,7]));
console.log(poker([3,5,3,5,2], [5,2,3,3,5]));
console.log(poker([3,4,5,6,7], [3,4,5,6,7]));

console.log(poker([10,11,11,10,11], [5,7,7,7,7]));
console.log(poker([2,2,3,3,4], [2,2,3,3,12]));
console.log(poker([2,4,5,9,10], [2,4,5,9,14]));
console.log(poker([12,12,11,11,6], [7,8,9,10,11]));
module.exports = poker;
