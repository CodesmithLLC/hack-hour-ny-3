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
  if (l2.next === null) {
    return l1;
  } else if (l1.next === null) {
    return l2;
  }

  let l1Curr = l1;
  let l2Curr = l2;
  let l1Next = l1.next;
  let l2Next = l2.next;
  while(l2.next !== null) {
    l1Curr.next = l2Curr;
    l1Next = l2Curr.next;
    l2Next = l1Next.next;
    l1Curr = l2Next.next;
    l2Curr = l1Next.next;
  }

  return l1;
};

zip();

module.exports = {Node: Node, zip: zip};
