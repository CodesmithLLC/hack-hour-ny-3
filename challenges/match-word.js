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

function matchWord(str) {
    let strArr = str.split('');
    let wordArr = [];
    let word = '';

    strArr.forEach((string, index) => {
        if (!string.match(/[^A-Za-z]/g) || string !== '_'){
            if (index === strArr.length-1) {
                word += string.toLowerCase();
                wordArr.push(word.trim())
            };
            word += string.toLowerCase();
        } else {
            console.log('not a letter')
            if (word.length > 1){
                wordArr.push(word)
            };
            word = '';
        };
    });

    let wordOrder = []
    for (let i = 0; i < wordArr.length; i+=1){
        if (wordArr.indexOf(wordArr[i].split('').reverse().join('')) > -1) {
            wordOrder.push(i);
            console.log('This word exists in the array backwards', wordArr[i])

        }
    };

    console.log(wordOrder, wordArr)

    let isBalanced = false;
    wordOrder.forEach((wordIndex, index) => {
        if (wordIndex < wordArr[index + 1] || index === wordOrder.length){
            console.log('we good')
            isBalanced = true;
        } else {
            console.log('Out of order: ', wordArr[index], wordArr[index+1])
            isBalanced = false;
        }
    })

    console.log('is balanced??: ', isBalanced);
};

matchWord('if__IFF_ fi');
// matchWord('__ENDDNE__');
// matchWord('IF()()fi[]');

module.exports = matchWord;
