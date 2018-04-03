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
    if (str === '') return true
    let matches = [];
    let words = [];
    let recording = false;
    for(let i=0; i< str.length; i++){
      char = str[i];
      if (char.match(/[a-z]/i)){
        if(recording === false){
          recording = true;
          words.push(char);
        }
        else words.push(char)
      }
      else {
        if(recording === true){
            recording = false;
            matches.push(words.join(''));
            words = [];
        }    
      }
    }
    return findMatches(matches);
  }
  
  
  
  function findMatches(arr){
    for(let i=0; i<arr.length-1; i++){
      if(arr[i].toLowerCase() === arr[i+1].toLowerCase().split('').reverse().join('')){
        return true
      }
    }
    return false;
  }

module.exports = matchWord;



// function balancedParens(input){
//     var matches = {'[':']', '{':'}', '(':')'};
//     var brackets = [];
//     for (var i = 0; i < input.length; i++) {
//       char = input[i];
//       if (char in matches) {
//         brackets.push(char);
//       } else if (char === ']' || char === ')' || char === '}'){
//         if (matches[brackets.pop()] !== char){
//           return false;
//         }
//       }
//     }
//     return !brackets.length;
//   }