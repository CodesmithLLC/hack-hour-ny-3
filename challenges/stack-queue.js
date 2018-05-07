/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {

  this.stack = new Array();
  
  this.stack.length = 0

  this.pop = function() {
    this.stack.length -= 1;
    this.stack.pop();
  }

  this.push = function(item) {
    this.stack.push(item);
    this.stack.length += 1;
    return this.length;
  }

}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
