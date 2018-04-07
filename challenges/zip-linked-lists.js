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
  if (!l1 && l2) {
    return l2;
  } else if (!l2 && l1) {
    return l1;
  }

  let newList = {};
  newList.head = new Node(l1.head);
  currentListOne = l1.head.next;
  currentListTwo = l2.head;
  currentNewList = newList.head;

  while (l1.next && l2.next) {
    currentNewList.value = currentListOne.value;
    currentNewList.next.value = currentListTwo.value;
    
    currentListOne = l1.next;
    currentListTwo = l2.next;
  }
};

module.exports = {Node: Node, zip: zip};
