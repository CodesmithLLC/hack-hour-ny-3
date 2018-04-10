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
    const spl = str.toLowerCase().split('');
    let filtered = [];
    const letters = /^[A-Za-z]+$/;
    const spaces = /^[_\s]+$/;
  
    for (let i = 0; i < spl.length; i+=1){
      if (spl[i].match(letters)){
        filtered.push(spl[i]);
        if (spl[i + 1] && spl[i + 1].match(spaces)){
          filtered.push(spl[i + 1]);
        }
      }
    }
    
    const wordArr = filtered.join('').split(/[\s_]+/)
    
    console.log(wordArr);
  }
  

module.exports = matchWord;
