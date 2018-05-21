// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    if (array.length < 1) return array;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                var prev = array[j];
                array[j] = array[j + 1];
                array[j + 1] = prev;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;
