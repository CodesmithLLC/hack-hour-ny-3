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
  let mean = Math.floor(
    array.reduce((a, b) => {
      return a + b;
    }) / array.length
  );
  //build the mode
  //get object with frequencies
  let freqCount = {}
  for(let i = 0 ; i < array.length; i+=1){
    if(freqCount.hasOwnProperty(array[i])){freqCount[array[i]] += 1}
    else{
      freqCount[array[i]] = 1
    }
  }
  //loop through object to find most frequent numbers
  let modeObj = {value: 0, count: 0};
  for (let el in freqCount){
    if(freqCount[el] >= modeObj.count){
      modeObj.value = Number(el)
      modeObj.count = freqCount[el];
    }
  }
  return modeObj.value === mean
}

modemean([1,2,3,2,3,7,10,2,12])

  // create object count that for each if exists add 1 to value otherwise add key

  //compare mode and mean return boolean
module.exports = modemean;
