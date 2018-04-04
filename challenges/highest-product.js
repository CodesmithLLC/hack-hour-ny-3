/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return 0;
    if (!Array.isArray(array)) return 0;
    
    array.sort((a,b) => {
        return a - b;
    }).reverse();
    console.log(array);

    let accumulator = 1; 
    for (let i = 0; i < 3; i+=1){
        accumulator = accumulator * array[i];
    };

    return accumulator;
};

console.log(highestProduct([14,9,5,3,10]))

console.log(highestProduct([14,9,5,3,10]))

module.exports = highestProduct;
