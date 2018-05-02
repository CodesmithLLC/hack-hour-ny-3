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
  let current1 = l1;
  let current2 = l2;
  let carryOver = 0;
  let output = null;
  let outputHead = output;

  while(current1 && current2) {
    let sum = current1.value + current2.value + carryOver;
    if (!output) {
      output = new Node(sum % 10)
      outputHead = output;
    } else {
      output.next = new Node(sum % 10);
      output = output.next;
    }
    carryOver = Math.floor(sum/10);
    current1 = current1.next;
    current2 = current2.next;
  }
  while(current1) {
    let sum = current1.value + carryOver;
    output.next = new Node(sum % 10);
    output = output.next;
    carryOver = Math.floor(sum/10);
    current1 = current1.next;
  }
  while(current2) {
    let sum = current2.value + carryOver;
    output.next = new Node(sum % 10);
    output = output.next;
    carryOver = Math.floor(sum/10);
    current2 = current2.next;
  }
  if (carryOver) output.next = new Node(1);
  return outputHead;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
