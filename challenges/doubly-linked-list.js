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
LinkedList.prototype.add = function(val) {
  if(!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  var current = this.head;
  loop: while (current) {
    if(current.val === val) {
      current.prev.next = current.next;
      current.next.prev = current.prev
      break loop;
    }
    current = current.next;
  }
};

LinkedList.prototype.add(1);
LinkedList.prototype.add(2);
LinkedList.prototype.add(3);
LinkedList.prototype.add(5);
LinkedList.prototype.remove(2);

module.exports = LinkedList;
