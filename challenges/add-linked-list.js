import { listenerCount } from "cluster";
import { SSL_OP_ALL } from "constants";

/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  var current1 = l1.head
  var current2 = l2.head
}

// find the heads of each list
// add the heads together, save it in a new addLinkedList
// move to the next in both list
// add those, save it to the next in the result addLinkedList


function kthToLastNode(k, head) {
  var count = 1
  var current = head
  var result = head

  while (current.next) {
    count+= 1;
    current = current.next
  }
  if (!count - k) return undefined;
  for (var i = 0; i < count - k; i++) {
    result = result.next
  }
  r

module.exports = {Node: Node, addLinkedList: addLinkedList};
