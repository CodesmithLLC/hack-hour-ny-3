/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {

  return {
    storage: [],
    index: 0,

    push: function (val) {
      this.storage[this.index] = val;
      return this.index += 1;
    },

    pop: function () {
      const last = this.storage[this.index - 1];
      this.index -= 1;
      return last;
    },

    getMax: function () {
      return Math.max(...this.storage) || Math.max(...this.storage.map((x) => x.length));
    }
  }
}

let stack = new Stack();
console.log(stack.getValue())

module.exports = Stack;