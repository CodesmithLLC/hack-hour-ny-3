/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.max = [];
}

Stack.prototype.push = function (value) {
  stack[this.length] = value;
  if (this.max.length === 0) {
    this.max[this.length] = value;
  } else if (value > this.max[this.length - 1]) {
    this.max[this.length] = value;
  } else {
    this.max[this.length] = this.max[this.length - 1];
  }
  this.length += 1;
};

Stack.prototype.pop = function () {
  if (this.length === 0) return undefined;
  const val = this[this.length - 1];
  delete this[this.length - 1];
  delete this.max[this.length - 1];
  this.length -= 1;
  return val;
};

Stack.prototype.getMax = function () {
  return this.max[this.length - 1];
};


module.exports = Stack;