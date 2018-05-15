// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  // Outer scan loop
  for (let i = 1; i < array.length; i += 1) {
    const pivot = array[i];
    // Inner insertion loop
    let j = i;
    while (j > 0 && array[j - 1] > pivot) {
      array[j] = array[j - 1];
      j -= 1;
    }
    array[j] = pivot;
  }
  return array
}

module.exports = insertionSort;