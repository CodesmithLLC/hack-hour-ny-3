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
  let val1 = next1 = l1;
  let val2 = next2 = l2;
  while(next1 && next2){
    val2 = val2.next;
    next2.next = new Node(val1.value);
    val1 = val1.next;
  }
  if (!l2 || !l2.value) return l1
};

module.exports = {Node: Node, zip: zip};



