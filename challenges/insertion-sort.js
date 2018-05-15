// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for(let i=1; i<array.length; i++){
    let j=i, stored = array[j];
    while(array[j]<array[j-1]){
      array[j] = array[j-1];
      array[j-1] = stored;
      j--;
    }
  }
  return array;
}

module.exports = insertionSort;