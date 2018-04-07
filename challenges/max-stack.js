/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.length = 0;
}

Stack.prototype.push = function(el) {
  // console.log(this)
  this.stack[this.length] = el; 
  this.length += 1;
  return this.length;
};

Stack.prototype.pop = function() {
  const temp = this.stack[this.length - 1];
  this.stack.splice(this.length - 1, 1);
  this.length -= 1
  return temp
}

Stack.prototype.getMax = function() {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < this.length; i += 1){
    if (this.stack[i] > max){
      max = this.stack[i];
    }
  }
  return max
}

module.exports = Stack;