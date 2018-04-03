// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    // String -> Boolean
    // have a status keep track of whether or not
    // we left something 'open'

    // identify discrete words and place them on stack
    // treat these as 'open'
    // create their reverse, and treat those as 'closed'
    let re = /\W/g;
    let cleanStr = str.replace(re, ' ').split(' ').filter(word => word !== '');

    // what am I trying to do?
    // iterate over words string, add to stack IF it
    // isn't the reverse of something already on the stack

    let checks = [];
    cleanStr.forEach(word => {
        let reversedWord = word.split('').reverse().join('');
        if (checks.indexOf(reversedWord) === -1) {
            checks.push(word);
            checks.push(reversedWord);
        }
    });

    let stack = [];

    for (let i = 0; i < cleanStr.length; i++) {
        let word = cleanStr[i];
        let checkPos = cleanStr.indexOf(word);

        if (checkPos % 2 === 0) {

        }
    }
    // console.log(checks);
    // console.log(cleanStr);
}

module.exports = matchWord;
