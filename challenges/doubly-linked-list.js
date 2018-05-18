/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function (val) {
  let node = new Node(val);
  this.tail.next = node;
  node.previous = this.tail
  this.tail = node
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let current = this.head
  while (current.val !== val) {
    current = current.next
  }
  current.prev.next = current.next
  current.next.prev = current.prev
  delete current
};

module.exports = LinkedList;
