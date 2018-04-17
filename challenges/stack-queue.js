/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {};

};

Stack.prototype.push = function (value) {
    this.stack[this.stack.length] = value;
    return this.stack.length;
};

Stack.prototype.pop = function (){
    let lastElement = this.stack[this.stack.length - 1];
    delete this.stack[this.stack.length - 1];
    return lastElement;
}

Stack.prototype.enqueue = function (){
    Queue.enqueue(this.stack[this.stack.length - 1]);
    return 
}

Stack.prototype.dequeue = function (){
    Queue.enqueue(this.stack[this.stack.length - 1]);
    return 
}

/**
* Queue Class
*/


function Queue() {
    this.queue = [];
};

Queue.prototype.enqueue =  function (value) {
    this.stack[this.stack.length] = value;
    return this.stack.length;
}

Stack.enqueue(45)

module.exports = {Stack: Stack, Queue: Queue};
