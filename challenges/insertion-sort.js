// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  const result = [];
  array.forEach((num) => {
    if (result.length === 0) result.push(num);
    else {
      let i = result.length - 1; // 1
      if (num > result[i]) result.push(num);
      else {
        while (result[i] > num && result[i - 1] !== undefined && result[i - 1] > num) {
          i -= 1;
        }
        result.splice(i, 0, num);
      }
    }
  });
  return result;
}

module.exports = insertionSort;
