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
    let sum = array.reduce((a,b) => {
        return a+b;
    })
    let mean = Math.floor(sum/array.length);

    let freq = {};
    for(let i = 0; i < array.length; i++){
        let stringNum = array[i].toString();
        if(freq[stringNum]){
            freq[stringNum] += 1;
        } else {
            freq[stringNum] = 1;
        }
    }

    let mostFreq;
    let occurs;
    for(var key in freq){
        if(!mostFreq){
            mostFreq = key;
            occurs = freq[key]
        }
        if(freq[key] > occurs){
            mostFreq = key;
            occurs = freq[key];
        }
        if(freq[key] === occurs && key > mostFreq){
            mostFreq = key;
        }
    }

    console.log(mean, mostFreq)

    if (mostFreq == mean){
        return true;
    } else {
        return false;
    }

}

//console.log(modemean([1,1,1,1,7,7,7,7,7,7,7,7,7]));

module.exports = modemean;
