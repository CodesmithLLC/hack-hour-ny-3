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

function addLinkedList(l1, l2, carry = 0) {
  if (!l1 || !l2) return carry ? new Node(carry) : null
  const sum = l1.value + l2.value
  const digit = new Node(sum % 10)
  carry = Math.floor(sum / 10)
  digit.next = addLinkedList(l1.next, l2.next, carry)
  return digit
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
