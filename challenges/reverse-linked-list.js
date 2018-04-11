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
    let current = head;
    let prev = null;
    let tempNext;

    while (current){
        current.next = null;
        next.next = current;
        current = head.next;    
    }

    console.log('Ending ', head);
}

let link1 = new Node(1);
link1.next = new Node(2);
link1.next.next = new Node(3);

console.log(reverseLinkedList(link1));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
