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
    var counter = 1;
    var numArray =[];
    while(counter <= num){
        numArray.push(counter)
        counter++;
    }
    for(var i = 0; i < numArray.length; i++){
        if (numArray[i]/5 % 1 === 0 && numArray[i]/3 % 1 === 0) {
            numArray[i] = "fizzbuzz";
        }

        if (numArray[i]/3 % 1 === 0) {
            numArray[i] = "fizz";
        }

        if (numArray[i]/5 % 1 === 0) {
            numArray[i] = "buzz";
        }
    }
    return numArray;
}

//console.log(fizzbuzz(16))
//

module.exports = fizzbuzz;
