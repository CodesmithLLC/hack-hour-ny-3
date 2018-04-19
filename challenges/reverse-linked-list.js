/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */


// function Node(value) {
//     this.value = value;
//     this.next = null;
// }

// function reverseLinkedList(head) {
//   let values = [];
//   if(!head.value || !head.next) return head 
//   while(head){
//     values.push(head.value);
//     head = head.next;
//   }
 
//   let newHead = new Node(values.pop());
//   let current = newHead
//   while(values.length){
//     current.next = new Node(values.pop())
//     current = current.next
//   }
//   return newHead;
// }



function Node(value) {
  this.value = value;
  this.next = null;
}
/* not in place  --- using a stack */
/*
function reverseLinkedList(head) {
  if(!head) return null;
  if(!head.next) return head;
  let stack = [];
  let current = head;
  while(current.next !== null){
      stack.push(current.value);
      current = current.next;
  }
  stack.push(current.value);
  head = new Node(stack.pop())
  current = head;
  let len = stack.length;
  for (let i = 0; i < len; i++) {
      current.next = new Node(stack.pop());
      current = current.next;
  }
  return head;
}
*/
/* In Place - using  a prev node */
// note to self:  remind everyone what an in-place algorithm is

function reverseLinkedList(head){
  let curr = head;
  let prev = null;
  let tempNext;

  while(curr){
      tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext
  }
  head = prev;
  return head;
}

// In place - recursive
function reverseLinkedList(head) {
if (!head || !head.next) return head;

var h = head;
var t = h.next;
var end = reverseLinkedList(t);

h.next.next = h;
h.next = null;

return end;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
