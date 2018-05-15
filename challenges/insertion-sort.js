// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (let i = 1, j = 1, element = false; i < array.length; !element ? i++ : j--) {
        if (!element) {
            if (array[i] < array[i - 1]) element = true, j = i
        } else {
            if (j === 0 || array[i] > array[j - 1]) {
                moveElementFromTo.call(array, i, j)
                element = false
            }
        }
    }
    return array
}

function moveElementFromTo(sourceIndex, targetIndex) {
    let [removed] = this.splice(sourceIndex, 1)
    this.splice(targetIndex, 0, removed)
}

module.exports = insertionSort;