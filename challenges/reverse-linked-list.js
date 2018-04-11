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

// function reverseLinkedList(head) {
//     let node = head;
//     let last;

//     function rn(node, prev = null) {
//         if(node.next) rn(node.next, node);
//         else last = node;
//         node.next = prev;
        
//     } rn(head);

//     console.log(node);

//     return last || head;
// }

function reverseLinkedList(head, previous = null) {
    if(head.next) reverseLinkedList(head.next, head);
    else head.next = previous;
    return head;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

a.next = b;
b.next = c;

console.log(reverseLinkedList(a));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
