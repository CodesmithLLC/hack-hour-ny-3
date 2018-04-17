/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  var zippedList = null;
  if (l1) {
    zippedList = new Node(l1.value);
  } else if (l2){
    zippedList = l2;
  }

  var current = zippedList;
  var currentL1 = l1;
  var currentL2 = l2;
  while (currentL1.next && currentL2.next) {
    current.next = new Node(currentL2.val);
    current = current.next;
    currentL2 = currentL2.next;
    current.next = new Node(currentL1.val);
    current = current.next;
    currentL1 = currentL1.next;
  }

  if (currentL1) {
    current = currentL1;
  }

  if (currentL2) {
    current = currentL2;
  }

  return zippedList;
}

module.exports = {Node: Node, zip: zip};
