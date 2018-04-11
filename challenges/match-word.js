// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

let string = '__END_DNE-----';

// function matchWord(str) {
//     str = str.split('')
//     while (str[0] === '-' || str[0] === '_' || str[0] === '-') {
//         str.shift[0];
//     }
//     if (str.length === 0) {
//         return true;
//     }
//     for (let i = 0; i < str.length; i++) {
//         var current_letter = str[i]
//         while (str.indexOf(str[i]) < str.lastIndexOf(str[i])) {
//             console.log(i)
//             return str.splice(0, 2);
//         }
//     }
//     return false;
// }


// function matchWord(str) {
//     var keywords = str.match(/[a-zA-Z]+/g) || [];
//     var wordStack = [];
//     for (var word of keywords) {
//         if (
//             word.split('').reverse().join('').toLowerCase() ===
//             (wordStack[0] || '').toLowerCase()
//         )
//             wordStack.shift();
//         else
//             wordStack.unshift(word);
//     }
//     return !wordStack.length;
// }


function matchWord(str) {
    if (str === '') return true;
    str = str.replace(/^[^a-z]+/i, "");
    str = str.replace(/[^a-z]+$/i, "");
    var wordArray = str.match(/[a-z]+/ig);
    if (wordArray.length < 2) return false;
    var firstWord = wordArray[0].toLowerCase();
    var lastWordReversed = wordArray[wordArray.length - 1].split('').reverse().join('').toLowerCase();
    return firstWord === lastWordReversed;
}

module.exports = matchWord;
