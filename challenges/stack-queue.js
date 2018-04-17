/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {};
    this.count = 0;

};

Stack.prototype.push = function (value) {
    this.stack[this.count] = value;
    this.count++;
    return this.stack.length;
};

Stack.prototype.pop = function (){
    let lastElement = this.stack[this.stack.length - 1];
    delete this.stack[this.stack.length - 1];
    return lastElement;
}

/**
* Queue Class
*/

function Queue() {
    this.queue = [];
    this.count = 0;
};

Queue.prototype.enqueue =  function (value) {
    this.queue[this.count] = value;
    return this.queue.length;
}

Queue.prototype.dequeue = function () {

}

// let stack = new Stack();

// stack.push(4)
// console.log(stack);

// stack.push(5)
// console.log(stack);
// // stack.enqueue(45)
// console.log()

module.exports = {Stack: Stack, Queue: Queue};
