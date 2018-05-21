// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0, k = 1; j < array.length - i, k < array.length; j += 1, k += 1) {
      if (array[j] > array[k]) {
        let STORE = array[j];
        array[j] = array[k];
        array[k] = STORE;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;

// iterate over the array given to us 
//   iterate on the array once more 
//     compare element i and j: if i> j switch them
//        iterate over the array once more with n-k
// return array


