/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

}


module.exports = highestProduct;


let Arr = [-34, 7, 9, -1, 5, 14, 20];

// Arr.sort(function(a, b) {
// 	return Math.abs(a) > Math.abs(b);
// });

function highestProduct(arr) {
    if (arr.length < 3) {return 0;}
    arr.sort(function (a, b) {
        return Math.abs(a) < Math.abs(b);
    });

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] * arr[i + 1] * arr[i + 2] > 0) {
            console.log(arr[i], arr[i + 1], arr[i + 2])
            return arr[i] * arr[i + 1] * arr[i + 2];
        }
    }
}

console.log(highestProduct(Arr));
