/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.storage = [];
    this.index = 0;
}

Stack.prototype.push = function (data) {
  this.storage[this.index++] = data;
  return data;
}

Stack.prototype.pop = function () {
  if (!this.index) return;
  const removed = this.storage[this.index];
  delete this.storage[this.index--];
  return removed;
}

/**
* Queue Class
*/

function Queue() {
  this.storage = new Stack();
}

Queue.prototype.enqueue = function (data) {
  this.storage.push(data)
}

Queue.prototype.dequeue = function () {
  const tempStack = new Stack();
  if (!this.storage.index) return;
  while (this.storage.index > 1) {
    tempStack.push(this.storage.pop());
  }
  const deqd = this.storage.pop();

  while (tempStack.index) {
    const toPop = tempStack.pop();
    if (toPop) this.storage.push(toPop);
  }
  return deqd;
}

module.exports = { Stack: Stack, Queue: Queue };
