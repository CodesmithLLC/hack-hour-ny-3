/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.size = 0;
    this.storage = {};
}

Stack.prototype.add = function (val) {
    this.size += 1;
    this.storage[this.size] = val;
};

Stack.prototype.pop = function () {
    if (this.length === 0) return undefined;
    let popped = this.storage[this.size];
    delete this.storage[this.size];
    this.size -= 1;
    return popped;
};

function Queue() {
    this.stackA = new Stack();
    this.stackB = new Stack();
}

Queue.prototype.enqueue = function (val) {
    this.stackA.add(val);
};

Queue.prototype.dequeue = function () {
    while (this.stackA.size > 0) {
        let temp = this.stackA.pop();
        this.stackB.add(temp);
    }
    return this.stackB.pop();
};

module.exports = { Stack: Stack, Queue: Queue };

