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

    function mode (array) {
        let target = array.reduce(function(a,v,i,arr){
            if(arr.includes(v, i+1)) a.push(v);
            return a;
        }, []);
        
        if(target.length > 2) target = mode(target);
        return target;
    }
    
    if(modes.length > 2) modes = mode(array);

    return Math.max(...modes) === Math.floor(mean);
}
console.log(modemean([8,10,8,5,4,7,5,10,8]))


module.exports = modemean;
