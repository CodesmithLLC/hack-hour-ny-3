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
    return Array(num).fill('').reduce(function(res, curr, i){
        i++;
        curr = i % 3 === 0 ? curr += 'fizz' : curr;
        curr = i % 5 === 0 ? curr += 'buzz' : curr;

        return res.push(curr || i) ? res : 0;
    },[]);
}

// function fizzbuzz(num) { 
//     const result = [];
//         for(let i = 1; i <= num; i++){
//             let target = '';
//             if (i % 3 === 0) {
//                 target += `fizz`;
//             }
//             if (i % 5 === 0) {
//                 target += 'buzz'
//             }
//             result.push(target || i);
//         }
//     return result;
// }

module.exports = fizzbuzz;
