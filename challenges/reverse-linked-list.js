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
    var node = head;
    var previous = null;

    while (node) {
        // save next or you lose it!!!
        var save = node.next;
        // reverse pointer
        node.next = previous;
        // increment previous to current node
        previous = node;
        console.log("node \n:", node, "prev \n \n", previous)
        // increment node to next node or null at end of list
        node = save;
    }
    return previous;
}

let link1 = new Node(1);
link1.next = new Node(2);
link1.next.next = new Node(3);
link1.next.next.next = new Node(4);

console.log(reverseLinkedList(link1));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
