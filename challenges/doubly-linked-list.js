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
LinkedList.prototype.add = function add(val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    node.prev = current;
    current.next = node;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function remove(val) {
  if (this.head) {
    let prev = null;
    let current = this.head;
    if (current.val === val && !this.head.next) {
      this.head = null;
      this.tail = null;
    } else if (current.val === val && this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      while (current) {
        if (current.val === val) {
          if (current.next === null) {
            prev.next = null;
            this.tail = prev;
          } else {
            prev.next = current.next;
            current.next.prev = prev;
          }
        }
        prev = current;
        current = current.next;
      }
    }
  }
};


module.exports = LinkedList;
