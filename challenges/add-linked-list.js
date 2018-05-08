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
  let tens = 0;
  let curl1 = l1;
  let curl2 = l2;
  while(curl1 && curl2){
    if(curl1.value + curl2.value > 9) {
      curl1.value = (curl1.value + curl2.value) % 10;
      tens = 1;
    }
    else {
      curl1.value = curl1.value + curl2.value + tens;
      tens = 0
    }
    curl1 = curl1.next;
    curl2 = curl2.next;
  }
  if(curl1) return l1;
  else curl1 = curl2;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
