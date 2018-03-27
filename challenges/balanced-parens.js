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
    let forwardParens = ['[', '{', '('];
    let backwardParens = [']', '}', ')'];

    let splitStr = input.split('');
    let forwardIndexes = {'square': [], 'bracket': [], 'parens': []};
    let backwardIndexes = {'square': [], 'bracket': [], 'parens': []};

    for (var i = 0; i < splitStr.length; i++){
        if (forwardParens.indexOf(splitStr[i]) > -1){
            switch(splitStr[i]){
                case '[':
                    forwardIndexes.square.push(i)
                case '{':
                    forwardIndexes.bracket.push(i)
                case '(':
                    forwardIndexes.parens.push(i)
            }
        }

        if (backwardParens.indexOf(splitStr[i]) > -1){
            switch(splitStr[i]){
                case ']':
                backwardIndexes.square.push(i)
                case '}':
                backwardIndexes.bracket.push(i)
                case ')':
                backwardIndexes.parens.push(i)
            }
        }
    }

    console.log(areTheyBalanced(forwardIndexes, backwardIndexes))
}

function areTheyBalanced (forwardIndexes, backwardIndexes) {
    for(var key in forwardIndexes){
        for (let i = 0; i < forwardIndexes[key].length; i+=1){
            console.log("Checking out of order: ", backwardIndexes[key][i], forwardIndexes[key][i])
            if ()
            if (forwardIndexes[key][i] > backwardIndexes[key][i]){
                console.log("These are out of order: ", backwardIndexes[key][i], forwardIndexes[key][i])
                return false;
            }
        }
    }
    return true;
    
}



// balancedParens('[](){}'); // true
// balancedParens('[({})]');   // true
// balancedParens('[  )(  ]  {  )   }'); // false
balancedParens('()('); // false

module.exports = balancedParens;
