/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    

    
    let startIndex = 0;
    while (startIndex < array.length - 1){
        for (let i = (startIndex + 1); i < array.length; i+=1){
            console.log('checking: ', array[startIndex], "+", array[i], "=", target, "?")
            if (array[startIndex] + array[i] === target) return true;
        }
        startIndex += 1;
    }
    
//     tryCombos(2)
//     tryCombos(4)
//     function tryCombos(comboCount) {
//         let combination = comboCount;
//         let base = () => {
//             let buildBase = 0;
//             for (let i = 0; i < comboCount - 1; i+=1){
//                 buildBase += array[i]
//             }
//             return buildBase;
//         };
    
//         for (let i = (comboCount - 1); i < array.length; i+=1) {
//             if (base() + array[i] === target) {
//                 console.log("Found a two combo match: ", base(), array[i])
//                 return true; 
//             }
//         }
//         return false;
//     }
}


subsetSum([3, 34, 4, 12, 5, 12], 32)
// subsetSum([3, 7, 4, 2], 5)


   
module.exports = subsetSum;
