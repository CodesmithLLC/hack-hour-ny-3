/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = []
  this.length = 0
  this.min = 0
  this.max = 0
}

Stack.prototype.push = (a) => {
  this.contents[this.length] = a;
  this.length++;
  if (a > this.max) {
    this.max = a
  } else if (a < this.min) {
    this.min = a
  }

  return this.length
}

Stack.prototype.pop = () => {
  let removed = this.contents[this.length - 1];
  this.contents = this.contents.slice(0, this.length - 1);
  return removed
}

Stack.prototype.getMax = () => {
  return this.max
}

module.exports = Stack;