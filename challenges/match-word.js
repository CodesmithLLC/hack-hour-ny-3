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
  const lowerString = str.toLowerCase();
  let index = 0;
  const stack = [];
  const seenWords = {};
  
  while (index < str.length) {
    let word = [];
    while (index < str.length && lowerString[index].match(/[a-z]/)) {
      word.push(lowerString[index]);
      index += 1;
    }
    if (word.length > 0) {
      let reversedWord = word.slice().reverse().join('');
      if (reversedWord in seenWords) {
        let match = stack.pop();
        if (match !== reversedWord) return false;
      } else {
        word = word.join('');
        stack.push(word);
        seenWords[word] = true;
      }
    }
    index += 1;
  }
  if (stack.length !== 0) return false;
  return true;
}

module.exports = matchWord;
