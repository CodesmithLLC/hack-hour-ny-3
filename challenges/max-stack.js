/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = {};
  this.length = 0;
}

Stack.prototype.pop = function (val) {
  if (this.length === 0) {
    return;
  }

  let removedVal = this.stack[this.length - 1];
  delete this.stack[this.length];
  this.length--;
  return removedVal;
};

Stack.prototype.push = function (val) {
  this.stack[this.length] = val;
  this.length++;
  return this.length;
};

Stack.prototype.getMax = function (val) {
  let vals = Object.values(this.stack);
  return Math.max(...vals);
};

module.exports = Stack;