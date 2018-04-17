/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0
}

Stack.prototype.push = value => {
  this.storage[this.index] = value;
  this.index++
  return this.index
}

Stack.prototype.pop = function() {
  let last = this.storage[this.index - 1]
  this.storage = Object.keys(this.storage).reduce((a, b) => {
    if (b < this.index - 1) a[b] = this.storage[b]
    return a
  }, {})
  this.index--
  return last
}



/**
* Queue Class
*/


function Queue() {
  this.front = new Stack
  this.rear = null
}

module.exports = {Stack: Stack, Queue: Queue};
