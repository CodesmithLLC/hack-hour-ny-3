/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    let merged = []
    let time = array.shift()
    check: while (array.length) {
        console.log('merged, ', merged)
        console.log('time, ', time)
        console.log('array, ', array)
        for (let i = 0; i < array.length; i++) {
            if (canMerge(time, array[i])) {
                console.log('merging, ', time, array[i])
                array[i] = merge(time, array[i])
                time = array.shift()
                continue check
            }
        }
        merged.push(time)
        time = array.shift()
    }
    merged.push(time)
    return merged
}

function canMerge([start1, end1], [start2, end2]) {
    return (start2 <= end1 && end1 <= end2) || (start1 <= end2 && end2 <= end1)
}

function merge([start1, end1], [start2, end2]) {
    return [Math.min(start1, start2), Math.max(end1, end2)]
}

module.exports = mergeRanges;
