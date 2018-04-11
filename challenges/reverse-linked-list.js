/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    // Linked-List head -> reversed linked-list -> reversed list head
    // return new head after reversing list
    let currentNode = head;
    // head of original list will be last of new list
    let prev = null;

    while (currentNode) {
        // go in to out
        let temp = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = temp;
    }

    let head = prev;
    return head;

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
