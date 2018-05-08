/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this._storage = {}
    this.count = 0
}

Stack.prototype.push = function (elem) {
    this._storage[this.count++] = elem
}

Stack.prototype.pop = function () {
    if (this.count) return this._storage[--this.count]
}

/**
* Queue Class
*/


function Queue() {
    this.normal = new Stack()
    this.reversed = null

}

Queue.prototype.enqueue = function (elem) {
    if (this.normal) this.normal.push(elem)
    else {
        this.reverse()
        this.normal.push(elem)
    }
}

Queue.prototype.dequeue = function () {
    if (this.reversed) return this.reversed.pop()
    else {
        this.reverse()
        return this.reversed.pop()
    }
}

Queue.prototype.reverse = function () {
    let source, target
    if (this.normal) {
        source = this.normal
        this.normal = null
        this.reversed = target = new Stack()
    } else {
        source = this.reversed
        this.reversed = null
        this.normal = target = new Stack
    }

    while (source.count) {
        target.push(source.pop())
    }
}

module.exports = { Stack: Stack, Queue: Queue };
