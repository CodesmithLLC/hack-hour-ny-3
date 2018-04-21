/**
 * Create a stack.Then create a queue using two stacks.
 */


 //Stack first in first out 
//Queue first in first out

// A queue is essential two stacks one is a regular stack and the other is 
// the a stack for dequeue, will return the value being removed



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
    //use two stacks here
    // this.in = new Stack();
    // this.out = new Stack();
    
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
