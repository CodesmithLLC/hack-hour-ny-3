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
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let word = '';
  let backword = '';

  if (str === '') {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (alpha.includes(char)) {
      var j = i + 1;
      while (alpha.includes(str[j].toLowerCase())) {
        word = str.slice(i, j + 1).toLowerCase();
        j++;
      }
      break;
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i].toLowerCase();
    if (alpha.includes(char)) {
      var k = i - 1;
      while (alpha.includes(str[k].toLowerCase())) {
        backword = str.slice(k, i + 1).toLowerCase();
        k--;
      }
      break;
    }
  }

  backword = backword.split('').reverse().join('');

  return word === backword && j <= k ? true : false;
}

module.exports = matchWord;
