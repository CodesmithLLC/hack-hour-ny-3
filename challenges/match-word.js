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

function matchWord(str){
  if (typeof str !== 'string') return 'bad input';
  if (str === '') return true;

  let stack =[];
  let wordArr = str.split(/[^a-z]/gi).filter(el=>el.length)
  if(wordArr % 2) return false
  console.log('here')
  wordArr.forEach((word)=>{
    word.split('').reverse().join('') === stack[stack.length-1] ? stack.pop() : stack.push(word)
  })
  return !stack.length
}







console.log(matchWord('__END_DNE-----'), '    should be:  true');  //-> true
console.log(matchWord('__ENDDNE__'), '    should be:  false');  //-> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'), '    should be:  true');  //-> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'), '    should be:  false');  //-> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'), '    should be:  true');  //-> true
console.log(matchWord(''), '    should be:  true');  //-> true
console.log(matchWord('asd,dsa,asd'), '    should be:  true');  //-> true
module.exports = matchWord;


// solution with stack (push / pop)
// function matchWord(str){
//   let stack = [];
//   let wordArr = str.toLowerCase().split(/[^a-zA-Z]/).filter(word => word.length)
//   wordArr.forEach((word) => {
//     console.log(word,word.split('').reverse().join(''),stack[stack.length-1])
//     word.split('').reverse().join('') === stack[stack.length-1] ? stack.pop() : stack.push(word)
//   })
//   return !stack.legnth
// }