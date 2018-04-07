/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  // body...
}

Stack.prototype.push = function(element){
  this.stack[this.stack.length] = (element);
  return this.stack.length;
};

Stack.prototype.pop = function(){
  let lastItem = this.stack[this.stack.length - 1]
  delete this.stack[this.stack.length - 1]
  return lastItem;
};

Stack.prototype.getMax = function(){
  let highestNum;
  for (let i = 0; i < this.stack.length - 1; i += 1){
    if (!highestNum) highestNum = this.stack[i];
    if (highestNum < this.stack[i]) highestNum = this.stack[i];
  }
  return highestNum;
};


//testing
// let newStack = new Stack();

// console.log(newStack.push(2));
// console.log(newStack.push(5));
// console.log(newStack.push(8));
// console.log(newStack.push(27));
// console.log(newStack);

// console.log(newStack.getMax());
// console.log(newStack.pop());


module.exports = Stack;