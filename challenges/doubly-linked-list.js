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
  if (!this.head) this.head = new Node(val);
  else {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(val);
    curr.next.prev = curr;
    this.tail = curr.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    let curr = this.head;
    while (curr.next && curr.val !== val) {
      curr = curr.next;
    }
    if (!curr.next && curr.val === val) {
      this.tail = curr.prev;
      curr.prev.next = null;
    } else if (!curr.next && curr.val !== val) {
      return undefined;
    } else {
      curr.next.prev = curr.prev;
      curr.prev.next = curr.next;
    }
  }
};

module.exports = LinkedList;
