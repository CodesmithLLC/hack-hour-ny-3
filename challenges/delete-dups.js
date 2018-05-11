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



function deleteDups(head) {
  let buffer = []
  let current = head
  while (current.next) {
    if (buffer.includes(current.next)) {
      current.next = current.next.next
    }
    current = current.next
  }
  return head
}

module.exports = deleteDups;
