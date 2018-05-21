// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let sorted = false;
  let rightStop = array.length;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < rightStop; i += 1) {
      if (array[i - 1] > array[i]) {
        sorted = false;
        //swap
        const temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
