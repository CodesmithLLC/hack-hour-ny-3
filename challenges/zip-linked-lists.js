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
  let dummy = new Node(null);
  let flag = dummy;

  while (l1 && l2) {
    console.log(dummy)
    flag.next = new Node(l1.value);
    flag = flag.next;
    flag.next = new Node(l2.value);
    flag = flag.next;

    l1 = l1.next;
    l2 = l2.next;
  }

  return dummy;
}

const list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } }
const list2 = { value: 4, next: { value: 5, next: { value: 6, next: null } } }

console.log(zip(list1, list2));

module.exports = { Node: Node, zip: zip };
