/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.stack[this.length] = value;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function() {
  const removed = this.stack[this.length - 1];
  delete this.stack[this.length - 1];
  this.length--;
  return removed;
}

Stack.prototype.getMax = function() {
  let max = this.stack[0];
  for (let key in this.stack) {
    if (this.stack[key] >= max) max = this.stack[key];
  }
  return max;
}

module.exports = Stack;
