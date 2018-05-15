// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    let i = 1;
    let eleToSort;

    while (i < array.length) {
        if (eleToSort) {
            if (i === 0 || eleToSort > array[i - 1]) {
                array.splice(i, 0, eleToSort);
                eleToSort = undefined;
            } else { i -= 1 }
        } else {
            if (array[i] < array[i - 1]) {
                eleToSort = array[i];
                array.splice(i, 1);
            } else { i += 1 }
        }
    }

    return array;
}

module.exports = insertionSort;