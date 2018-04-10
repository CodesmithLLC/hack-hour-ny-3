/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}
function reverseLinkedList(head) {
    let node = head
    let previous = null;
    while (node) {
      let saved = node.next;
      node.next = previous;
      previous = node;
      node = saved
    }
    return previous
  }
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
