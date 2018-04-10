/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(val) {
  this.size = 0
  this.storage = {}
}

Stack.prototype.push = function (value) {
  this.storage[this.length] = value
  this.count++
}
Stack.prototype.pop = function () {
  if (this.length === 0) return undefined;
  this.size -= 1
  var result = this.storage[this.count]
  delete this.storage[this.size]
  return result
}
Stack.prototype.getMax() = function () {
  if (this.legnth === 0) return undefined;
  let max
  for (el in this.storage) {
    if (this.storage[el] >= max) max = this.storage[el]
  }
  return max;
}

module.exports = Stack;