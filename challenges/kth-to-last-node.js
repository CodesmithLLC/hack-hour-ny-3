/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // Send to pointers down the list with one delayed by k positions
  if (head === undefined) return undefined;
  let leader = head;
  let k_node = head;
  for (let i = 0; i < k; i++) {
    if (leader === null) return;
    leader = leader.next;
  }
  while(leader) {
    leader = leader.next;
    k_node = k_node.next;
  }
  return k_node.value;
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
