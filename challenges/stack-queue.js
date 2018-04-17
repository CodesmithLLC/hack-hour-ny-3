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

const stack1 = new Stack();
const stack2 = new Stack();

function Queue() {
  this.queue = {};
  this.length = 0;
}

Queue.prototype.enqueue = function enqueue(value) {
  stack1.push(value);
};

Queue.prototype.enqueue = function dequeue() {
  if (stack2.length > 0) {
    const deq = stack2.pop();
    return deq;
  }
  while (stack1.length > 0) {
    stack2.push(stack1.pop());
  }
};

module.exports = { Stack, Queue };
