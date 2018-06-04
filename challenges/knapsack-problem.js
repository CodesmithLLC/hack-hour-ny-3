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
  const highestValues = [];

  const canFit = items.filter(item => item.weight <= weightAvailable);

  function highestValue(bag, weightLeft, itemValue) {
    if (weightLeft === 0) return itemValue;
    let result = null;
    let index = -1;
    bag.forEach((item, i) => {
      const { weight, value } = item;
      if (weight <= weightLeft && (result === null || result <= value)) {
        result = value;
        index = i;
      }
    });
    if (result === null) return itemValue;
    itemValue += result;
    weightLeft -= bag[index].weight;
    bag.splice(index, 1);
    return highestValue(bag, weightLeft, itemValue);
  }
  canFit.forEach((item, i) => {
    const copyItems = canFit.slice();
    let result = 0;
    const { weight } = item;
    const copyWeight = weightAvailable - weight;
    copyItems.splice(i, 1);
    if (copyItems.length !== 0) result += highestValue(copyItems, copyWeight, result + item.value);
    highestValues.push(result);
  });
  let max = null;
  highestValues.forEach((value) => {
    if (max === null || max <= value) max = value;
  });

  return max;
}

module.exports = solveKnapsack;
