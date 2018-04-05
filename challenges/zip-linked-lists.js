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
  while (l1.next && l2.next) {
    let currentNode= l1
    let nextzip1 = l1.next;
    currentNode.next = l2;
    l2.next = nextzip1;
    l1 = l1.next;
    current = l1
  }
}

let list1 = new Node(4);
list1.next = new Node(3);
list1.next.next = new Node(13);
list1.next.next.next = new Node(99);

let list2 = new Node(45);
list2.next = new Node(6);
list2.next.next = new Node(17);
list2.next.next.next = new Node(150);


zip(list1, list2);




module.exports = { Node: Node, zip: zip };
