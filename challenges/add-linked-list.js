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
  let sumArr = [];

  let currentL1 = l1;
  let currentL2 = l2;
  let carry = 0;
  let sum = 0;

  while (currentL1 &&  currentL2) {

    if((currentL1.value + currentL2.value + carry) > 9) {
      sum = (currentL1.value + currentL2.value + carry) % 10;
      carry = Math.floor((currentL1.value + currentL2.value + carry) / 10);
    } else {
      sum = (currentL1.value + currentL2.value + carry);
      carry = 0;
    }

    sumArr.push(sum);

    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }

  while(currentL1) {
    sumArr.push(currentL1.value);
    currentL1 = currentL1.next;
  }

  while(currentL2) {
    sumArr.push(currentL2.value);
    currentL2 = currentL2.next;
  }

  sumArr = sumArr.map((x) => new Node(x));
  sumArr.reduce((n1,n2) => n1.next = n2);

  return sumArr[0];
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
