/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  let weights = items.map((a) => a.weight)
  let possibleCombo = []
  for (let i = 0; i < items.length; i++) {
    let val = 0
    let count = weightAvailable
    let index = i
    while ((items[index] && count - items[index].weight) >= 0) {
      val = val + items[index].value
      count -= items[index].weight
      index++
    }
    possibleCombo.push(val)
  }
  return Math.max(...possibleCombo)
};

module.exports = solveKnapsack;
