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
  let current1;
  let current2;
  let next1;
  let next2;
  current1 = head = l1;
  current2 = l2;
  while(current1 && current2) {
    next1 = current1.next;
    next2 = current2.next;
    // diagnal zip from l2 head to next l1
    current2.next = next1;
    // zip l1 head to l2 head
    current1.next = current2;
    // Restart for next iteration
    current1 = current2.next;
    current2 = next2;  
  }
  return head;
};


module.exports = {Node: Node, zip: zip};
