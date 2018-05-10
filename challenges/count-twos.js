// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    var n;
    if (num % 2 === 1 ) {
        n = Math.floor(num/2)
    } else {
        n = Math.floor((num / 2)) - 1
    }
    console.log(n)

    return ((n*(n+1)) / 2)
}
//doesn't work for count two but use method for 3 or 5 3+ 5 -15

console.log(countTwos(10))
console.log(countTwos(3))
module.exports = countTwos;
