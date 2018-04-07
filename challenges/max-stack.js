/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
   this.arr = [...arguments][0];
}
  // body...
  Stack.prototype.pop = function() {
    var ele = this.arr[this.arr.length - 1];
    this.arr.splice(this.arr.length - 1, 1);
    return ele;
  }

  Stack.prototype.push = function() {
    this.arr[this.arr.length] = [...arguments][0];
    return this.arr;
  }

  Stack.prototype.getMax = function() {
    var largest = this.arr[0];
    for (var i = 1; i < this.arr.length; i++) {
      if(this.arr[i] > largest) {
        largest = this.arr[i];
      }
    }
    return largest;
  }

module.exports = Stack;