// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let current = 1

  while (current < array.length) {
    let previous = current - 1
    let local = array[current]

    while (array[previous] > local && array[previous] !== undefined) {
      let tempSave = array[previous]
      array[previous] = local
      array[previous + 1] = tempSave
      previous--
    }

    current++
  }

  return array
}

module.exports = insertionSort;