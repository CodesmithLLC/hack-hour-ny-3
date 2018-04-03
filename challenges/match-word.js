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
    if (str.length === 0) {return true}
    let lowerStr = str.toLowerCase();
    let strArr = lowerStr.match(/[a-z]+/g);
    let stack = [];

    for (let i = 0; i < strArr.length; i++) {
        let currStr = strArr[i].split('').reverse().join('');
        if (currStr === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(strArr[i]);
        }
    }

    return stack.length ? false : true;
}

module.exports = matchWord;
