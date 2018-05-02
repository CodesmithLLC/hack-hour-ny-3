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
  const arr1 = [];
  while (current1.next) {
    arr1.push(current1.value);
    current1 = current1.next;
  }
  arr1.push(current1.value);
  let current2 = l2;
  const arr2 = [];
  while (current2.next) {
    arr2.push(current2.value);
    current2 = current2.next;
  }
  arr2.push(current2.value);
  let carry = 0;
  let larger = arr1;
  let smaller = arr2;
  if (arr1.length < arr2.length) {
    larger = arr2;
    smaller = arr1;
  }
  const totals = larger.map((num, idx) => {
    let value2 = smaller[idx];
    if (value2 === undefined) value2 = 0;
    let sum = num + value2 + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else carry = 0;
    return sum;
  });
  if (carry === 1) totals.push(1);
  const node = new Node(totals[0]);
  let current = node;
  totals.slice(1).forEach((num) => {
    const newNode = new Node(num);
    current.next = newNode;
    current = newNode;
  });
  return node;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
