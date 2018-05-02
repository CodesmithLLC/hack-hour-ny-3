// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let places = num.toString()
  let numArry = {}
  let count = 0
  for (let i = 0; i < places.length; i++) {
    numArry[Math.pow(10, places.length - i - 1).toExponential()] = places[i]
  }
  for (let key in numArry) {
    let n = parseInt(key.charAt(key.length - 1))
    let base = n * Math.pow(10, n - 1)
    if (numArry[key] != 0) {
      if (numArry[key] < 2) {
        count += base
      } else if (numArry[key] > 2) {
        count += base * (numArry[key] - 1) + Math.pow(10, n)
      } else {
        count += base * numArry[key] + 1
      }
    }
  }
  return count
}

module.exports = countTwos;
