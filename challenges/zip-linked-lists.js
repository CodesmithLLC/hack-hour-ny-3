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
  let node1 = l1;
  let node2 = l2;
  let saveNode1
  let saveNode2
  while (node1.next && node2.next) {
    saveNode1 = node1.next;
    saveNode2 = node2.next;
    node1.next = node2;
    node2.next = saveNode1;
    saveNode1.next = saveNode2;
    node1 = saveNode1;
    node2 = saveNode2;
  }
  return l1;
}

let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);
list1.next.next.next = new Node(7);

let list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);
list2.next.next.next = new Node(8);

zip(list1, list2);




module.exports = { Node: Node, zip: zip };
