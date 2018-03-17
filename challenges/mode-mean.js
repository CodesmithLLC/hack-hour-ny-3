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
  let mean = 0;
  let mode = 0;
  array.sort((a,b) => a - b);

  let added = array.reduce((acc, cur) => {
    return acc + cur
  }, 0);
  mean = Math.floor(added / array.length);

  const arrayObj = array.reduce((obj, cur) => {
    obj[cur] = obj[cur] ? obj[cur] += 1 : 1
    return obj
  }, {});

  for (let e in arrayObj){
    if(arrayObj[e] >= mode){
    mode = (Number(e) >= mode) ? Number(e) : mode
    }
  }
  return (mode === mean) ? true : false;
}

module.exports = modemean;
