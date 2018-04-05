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
  let current = l1;
  let current2 = l2;
  while (current) {
    current = current.next;
    let save = current;
    current = current2;
    let save2 = current.next;
    current = current.next;
    current = save;
    current = current.next;
    current = save2;
  }
}

module.exports = { Node, zip };
