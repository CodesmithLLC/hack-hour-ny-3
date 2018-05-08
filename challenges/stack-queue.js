/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.container = {};
  this.length = 0;
  this.push = function (value) {
    this.container[this.length] = value;
    this.length += 1;
  }
  this.pop = function () {
    if (this.length === 0) return undefined;
    const val = this.container[this.length - 1];
    delete this.container[this.length - 1];
    this.length -= 1;
    return val;
  }
}


/**
* Queue Class
*/


function Queue() {
  this.s1 = new Stack();
  this.s2 = new Stack();
  this.enqueue = function (value) {
    this.s1.push(value);
  }
  this.dequeue = function () {
    let val = this.s2.pop();
    if (val === undefined) {
      let temp;
      // Move elements to second stack
      temp = this.s1.pop();
      // If both stacks are empty return undefined;
      if (temp === undefined) return temp;
      while (temp) {
        this.s2.push(temp);
        temp = this.s1.pop();
      }
      // Try to pop again with a refilled second stack.
      val = this.s2.pop();
    }
    return val;
  }
}

module.exports = { Stack: Stack, Queue: Queue };
