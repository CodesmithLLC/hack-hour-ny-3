// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let i=0, flag = false;
  while(i<array.length-1){
    if(array[i]>array[i+1]){
      const temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
      flag = true;
    }
    i++;
  }
  return flag ? bubbleSort(array) : array;
}

module.exports = bubbleSort;
