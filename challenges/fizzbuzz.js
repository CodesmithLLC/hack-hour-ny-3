// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  var numArr = num
  for (let i = 0; i < numArr.length; i++) {
    if ((numArr[i] % 3 === 0) && (numArr[i] % 5 === 0)) {
      numArr[i] = "fizzbuzz"
    } else if (numArr[i] % 3 === 0) {
      numArr[i] = "fizz"
    } else if (numArr[i] % 5 === 0) {
      numArr[i] = "buzz"
    }
  }
  return numArr;
}

module.exports = fizzbuzz;
