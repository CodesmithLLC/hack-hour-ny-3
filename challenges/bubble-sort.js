// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let l = array.length;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < l; j += 1) {
      const num = array[j];
      const next = array[j + 1];
      if (num > next) {
        array[j + 1] = num;
        array[j] = next;
      }
    }
    l -= 1;
  }
  return array;
}


module.exports = bubbleSort;
