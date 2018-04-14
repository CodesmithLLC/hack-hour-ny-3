/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    // let endIndex = str.length - 1;
    // let startIndex = 0;
    // let isPall = true;

    // while (endIndex !== startIndex){
    //     console.log('letters :', str[endIndex], str[startIndex])
    //     if (str[endIndex] !== str[startIndex]){
    //         isPall = false; 
    //     }
    //     endIndex -= 1;
    //     startIndex += 1;
    // }
    // if (isPall) return true;

    let results = [];
    function permute (arr, memo) {
        var curr, memo = memo || [];
        console.log('another permutation: ', arr, memo)

        for (let i = 0; i < arr.length; i += 1) {
            curr = arr.splice(i, 1);
            console.log('this is curr: ', curr, 'array after splice: ', arr)
            console.log('arr length: ', arr.length);
            if (arr.length === 0){
                results.push(memo.concat(curr));
            }
            permute(arr.slice(), memo.concat(curr))
            arr.splice(i, 0, curr[0])
        }

        return results;
    }
    return permute(['b', 'a', 'x']);
}

console.log(permPalin('bab'));

module.exports = permPalin;