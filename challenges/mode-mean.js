/*
 * Given an array of numbers, determine if the mode and mean of 
 * the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    let modes = [];
    let mean = (array.reduce(function(a,v,i){
        if(array.includes(v, i+1)) modes.push(v);
        return a+=v;
    }) / array.length);

    return Math.max(...modes) === mean; 
}

// function mode (array) {
//     let target = array.reduce(function(a,v,i,arr){
//         if(arr.includes(v, i+1)) a.push(v);
//         return a;
//     }, []);
    
//     if(target.length > 1) target = mode(target);
//     return target;
// }

// if(modes.length > 1) modes = mode(array);

module.exports = modemean;
