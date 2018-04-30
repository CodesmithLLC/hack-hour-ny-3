/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


function Stack() {
  // body...
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  if(value){
    this.contents[this.length] = value;
    this.length++;
    return this.length
  }
  else return 'Error: your value is undefined'
};

Stack.prototype.pop = function() {
  let newContents = {}
  if(this.length>0){
    let lastNum = this.contents[this.length-1];
    for(let i=0; i<this.index-1; i++){
      newContents[i] = this.storage[i];
    }
    this.storage = newContents;
    if (this.length !== 0){
     this.length --;
    }
    return lastNum;
  }
};

Stack.prototype.getMax = function() {
  let max = this.contents[0];
  if(this.length>0){
    for(let i=1; i<this.length; i++){
      if(this.contents[i] > max) max = this.contents[i];
    }
  }
  return max;
};

module.exports = Stack;