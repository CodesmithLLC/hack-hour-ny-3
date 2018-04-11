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
  let values = [];
  if(!head.value || !head.next) return head 
  while(head){
    values.push(head.value);
    head = head.next;
  }
 
  let newHead = new Node(values.pop());
  let current = newHead
  while(values.length){
    current.next = new Node(values.pop())
    current = current.next
  }
  return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
