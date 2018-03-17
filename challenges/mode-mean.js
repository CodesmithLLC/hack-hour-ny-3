/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    let total = array.reduce((accumulator, currentValue) => accumulator + currentValue );
    mean = Math.floor(total/array.length);
    let checkList = {};
    for(let i=0;i<array.length;i++){
        if(!checkList.hasOwnProperty(array[i])){
            checkList[array[i]] = 0;
        }
        else checkList[array[i]] += 1;
    }
    // Object.keys(list).sort(function(a,b){return list[a]-list[b]})
    uniqueSorted = Object.keys(checkList).sort(function(a,b){return checkList[a]-checkList[b]});
    mode = parseInt(uniqueSorted[uniqueSorted.length-1]);
    return mode === mean ?  true:  false;
}

module.exports = modemean;
