/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    Stack : {
        this.stac = new Array();
        this.pop = function () {
            return this.stac.pop();
        }
        this.push = function (item) {
            this.stac.push(item);
        }
    }
}


/**
* Queue Class
*/


function Queue() {
    Queue : {
        this.que = new Array();
        this.dequeue = function () {
            return this.que.pop();
        }
        this.enqueue = function (item) {
            this.que.unshift(item);
        }
    }
}

module.exports = { Stack: Stack, Queue: Queue };
