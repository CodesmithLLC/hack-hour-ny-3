/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.Stack = new Array();
    this.pop = function () {
        return this.stac.pop();
    }
    this.push = function (item) {
        this.stac.push(item);
    }
}


/**
* Queue Class
*/


function Queue() {
    this.Queue = new Array();
    this.dequeue = function () {
        return this.stac.pop();
    }
    this.enqueue = function (item) {
        this.stac.unshift(item);
    }
}

module.exports = { Stack: Stack, Queue: Queue };
