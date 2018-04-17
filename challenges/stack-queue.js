/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.length = 0;
  this.push = function(value){
    this.storage[this.length] = value;
    this.length ++;
  }
  this.pop = function(){
    let deleted = this.storage[this.length-1]
    this.storage.splice(this.length-1,1);
    this.length --;
    return deleted
  }
}


/**
* Queue Class
*/


function Queue(value) {
  let stack1 = new Stack;
  let stack2 = new Stack;
  
  this.length = 0;
  this.storage = [];

  this.eneque = function(value){
    stack1.push(value);
    this.length = stack1.length + stack2.length;
    this.storage = stack1.storage.concat(stack2.storage);
  }
  this.dequeue = function(){
    while(stack1.length > 0){
      stack2.push(stack1.pop())
    }
    stack2.pop();
    while(stack2.length > 0){
      stack1.push(stack2.pop())
    }
    this.length = stack1.length + stack2.length;
    this.storage = stack1.storage.concat(stack2.storage);
  }
}

module.exports = {Stack: Stack, Queue: Queue};
