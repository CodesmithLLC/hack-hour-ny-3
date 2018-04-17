/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.index = 0;
    this.storage = {};
}

Stack.prototype.push = function(value) {
    this.storage[this.index] = value;
    this.index += 1;
    return this.index;
}

Stack.prototype.pop = function() {
    let popped = this.storage[this.index - 1];
    delete this.storage[this.index - 1];

    if (this.index > 0) this.index -= 1;

    return popped;
}

/**
* Queue Class
*/


function Queue() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
    this.stack1.push(value);
}

Queue.prototype.dequeue = function() {
    if (this.stack2.index === 0) {
        if (this.stack1.index === 0) return 'queue is already empty';
        while (this.stack1.index > 0) {
            var popped = this.stack1.pop();
            this.stack2.push(popped);
        }
    }
    
    return this.stack2.pop();
}

module.exports = { Stack: Stack, Queue: Queue };
