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
    let currentNode = head
    let transit = []
    while (currentNode) {
        transit.push(currentNode)
        currentNode = currentNode.next
    }
    for (let i = transit.length - 1; i > 0; i -= 1) {
        transit[i].next = transit[i - 1]
    }
    return transit[transit.length - 1]
}
module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
