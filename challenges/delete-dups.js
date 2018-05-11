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
    let prev;
    let curr = head;
    let cache = [];

    while (curr) {
        if (!cache.includes(curr.value)) cache.push(curr.value);
        else if (cache.includes(curr.value)) {
            if (!curr.next) prev.next = null;
            else {
                prev.next = curr.next;
                curr = prev.next;
            }
        }
        
        prev = curr;
        curr = curr.next;
    }

    return head;
}

module.exports = deleteDups;
