/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let str
    if(typeof input === 'string'){
      str = input.split("");
    }
    else {
      str = input;
    }
    
      let i=0;
      while(str[0]){
        if(bracketChecker(str[0]) === false) str.shift()
        else{
          let missingIndex = str.indexOf(findMissing(str[0]))
      
          if(missingIndex === -1) return false
          let insideCheck = checkSameBracket(str,str[0],1,missingIndex)
          if (insideCheck==='allClear'){
            str.splice(missingIndex,1)
            str.shift()
          }
          else if(insideCheck===false) return false
          else {
            str.splice(missingIndex,1)
            str.shift(insideCheck,1)
          }
        }
      }
      return true
  }
  
  function checkSameBracket(str,currentBarcket,start,end){
  
        for(let i=start; i<end; i++){
          if(str[i]===currentBarcket) {
            return i
          }
        }
  
        if(balancedParens(str.slice(start,end))===false) return false
        else{
          return 'allClear'
        }
        
  }
  
  function bracketChecker(input){
      let parentheses = "[]{}()"
      let position = parentheses.indexOf(input);
      if(position === -1) return false
  }
  
  function findMissing(bracket){
      if(bracket === '(') return ')'
      else if(bracket === '[') return ']'
      else if(bracket === '{') return '}'
  }

module.exports = balancedParens;
