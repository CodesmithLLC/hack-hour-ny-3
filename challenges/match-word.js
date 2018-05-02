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

class Stack  {
  constructor () {
    this.storage = [];
  }

  last () {
    return this.storage[this.storage.length - 1];
  }
}

const stack = new Stack();

function filterWords(str) {
  if (!str.length) return stack.storage;

  const last = str[0].toLowerCase();
  const lastCharCode = last.charCodeAt(0);
  const currentCode = lastCharCode > 96 && lastCharCode < 123;

  str = str.slice(1);

  let stackLast = stack.last();

  if (currentCode) {
    if (!stackLast) {
      if(stackLast === '') stack.storage.pop();
      stack.storage.push(last);
    }
    else {
      stackLast += last;
      stack.storage.pop();
      stack.storage.push(stackLast);
    }
  } else if (stackLast) {
    stack.storage.push('');
  }

  return filterWords(str);
}

function matchWord (str) {
  let filtered = filterWords(str);

  if(!filtered.length) return true;
  if (filtered[filtered.length - 1] === '') filtered = filtered.slice(0, -1);
  
  console.log(filtered);
  
  while (filtered) {
    console.log(filtered[0])
    let first = filtered[0].split('').reverse().join('');

    if ( filtered.indexOf(first, 1) !== filtered.length - 1 ) {
      console.log(first, filtered.indexOf(first, 1));
      return false;
    }
    filtered = filtered.slice(1);
  }

  return true;
}

console.log(matchWord('__END_DNE-----'));


//module.exports = matchWord;
