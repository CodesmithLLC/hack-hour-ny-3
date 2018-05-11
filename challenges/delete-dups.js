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
  const storage = {};
  let prev = null;
  let current = head;
  while (current) {
    const { value } = current;
    if (storage[value] === undefined) {
      storage[value] = true;
      prev = current;
      current = current.next;
    } else {
      prev.next = current.next;
      current = current.next;
    }
  }
  return head;
}

module.exports = deleteDups;
