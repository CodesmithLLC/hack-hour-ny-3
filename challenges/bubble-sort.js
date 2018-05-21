// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    if (!array || array.length < 2) return array
    let sorted
    while (!sorted) {
        sorted = true
        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                let swap = array[i - 1]
                array[i - 1] = array[i]
                array[i] = swap
                sorted = false
            }
        }
    }
    return array
}
module.exports = bubbleSort;
