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
    if (str === ''){
      return true;
    }
    
    var regexp = /[A-Z]+/gi;
    var words = str.match(regexp)
      for (var i = 0; i < words.length -1; i++) {
          let word = words[i].toLowerCase();
          let revNext = words[i+1].split('').reverse().join('').toLowerCase();
            if (word !== revNext) {
              return false
            }
      }
      return true
  }

//   https://initjs.org/data-structure-stack-in-javascript-714f45dbf889

module.exports = matchWord;
