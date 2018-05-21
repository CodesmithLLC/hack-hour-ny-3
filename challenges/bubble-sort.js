// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let len = array.length;

    while (len > 1) {
        for (let i = 0; i < len - 1; i += 1) {
            let ele1 = array[i];
            let ele2 = array[i + 1];

            if (ele1 > ele2) {
                array[i] = ele2;
                array[i + 1] = ele1;
            }
        }
        len -= 1;
    }

    return array;
}

module.exports = bubbleSort;
