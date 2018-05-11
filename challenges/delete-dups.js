/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */


function deleteNode(prevNode, target) {
  prevNode.next = target.next;
  target.next = null;
  delete target;
}

function deleteDups(head) {
  if (!head) return head;
  const seen = {};
  current = head;
  while(current && current.next) {
    seen[current.value] = true;
    // Delete until we no longer see duplicates
    if (current.next.value in seen) {
      deleteNode(current, current.next)
    } else {
      current = current.next;
    };
  }
  return head;
}

module.exports = deleteDups;
