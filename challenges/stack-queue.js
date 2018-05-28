/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.length = 0;
}

Stack.prototype.push = function push(value) {
  this.stack[this.length] = value;
  this.length += 1;
  return this.length;
};

Stack.prototype.pop = function pop() {
  if (this.length === 0) return undefined;
  const popped = this.stack[this.length - 1];
  delete this.stack[this.length - 1];
  this.length -= 1;
  return popped;
};

/**
* Queue Class
*/

function Queue() {
  this.enter = new Stack();
  this.leave = new Stack();
}

Queue.prototype.enqueue = function enqueue(value) {
  this.enter.push(value);
};

Queue.prototype.dequeue = function dequeue() {
  if (this.leave.length !== 0) return this.leave.pop();
  while (this.enter.length !== 0) {
    this.leave.push(this.enter.pop());
  }
  return this.leave.pop();
};

module.exports = { Stack, Queue };
