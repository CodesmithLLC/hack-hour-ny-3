// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
for(var i = 0; i < array.length; i ++) {
    var tmp = array[i]
    for (var j = i - 1; j >= 0 && array[j] > tmp; j--) {
        array[j+1] = array[j]
    }
    array[j+1] = tmp
}
return array
}

var ar = [2,4,1,3]
insertionSort(ar)
console.log(ar)

module.exports = insertionSort;