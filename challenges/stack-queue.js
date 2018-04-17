/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {};

};

Stack.prototype.push = function (value) {
    this.stack[this.stack.length] = value;
    return this.stack;
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

};

module.exports = {Stack: Stack, Queue: Queue};
