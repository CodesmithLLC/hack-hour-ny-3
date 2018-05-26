// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = array.length; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      const num = array[j];
      const next = array[j + 1];
      if (num > next) {
        array[j + 1] = num;
        array[j] = next;
      }
    }
  }
  return array;
}


module.exports = bubbleSort;
