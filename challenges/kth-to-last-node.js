/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// Solution 1: Two loops
// function kthToLastNode(k, head) {
//   if(k<1 || !k || !head || Number.isInteger(k) || typeof head !== 'object') return undefined;
//   let current1 = head;
//   let current2 = head;
//   let height = 1;
//   let counter = 1;
//   while(current1.next){
//     height ++;
//     current1 = current1.next
//   }
//   if(height < k) return undefined;
//   while(counter <= (height - k)){
//     counter ++;
//     current2 = current2.next
//   }
//   return current2.value;
// }

// Solution 2: Save the values
function kthToLastNode(k, head) {
  if(k<1 || !k || !head || Number.isInteger(k) || typeof head !== 'object') return undefined;
  let array = [];
  while(head){
    array.push(head.value);
    head = head.next;
  }
  if(array.length < k) return undefined;
  return array[array.length - k]
}

// Solution 3: One full while loop with two counters
function kthToLastNode(k, head) {
  if(k<1 || !k || !head || Number.isInteger(k) || typeof head !== 'object') return undefined;
  let current1 = head;
  let current2 = head;
  let height = 1;
  while(height <= k){
    height++;
    current1 = current1.next
  }
  while(current1){
    current1 = current1.next;
    current2 = current2.next;
  }
  return current2.value;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));// -> returns 'D' (the value on the second to last node)


module.exports = {Node: Node, kthToLastNode: kthToLastNode};



// Solution 1: Two loops
function kthToLastNode(k, head) {
  if(!k || !head || k<1 || !Number.isInteger(k)) return undefined;
  let current1 = head;
  let current2 = head;
  let height = 1;
  let counter = 1;
  while(current1.next){
    height++;
    current1 = current1.next;
  }
  if(k > height) return undefined
  while(counter <= (height - k)){
    counter ++;
    current2 = current2.next
  }
  return current2.value
}

// Solution 2: Save the values
function kthToLastNode(k, head) {
  if(k < 1 || !head || !Number.isInteger(k)) return undefined;
  let values = [];
  while(head){
    values.push(head.value);
    head = head.next;
  }
  if(k > values.length) return undefined
  return values[values.length - k]
}

// Solution 3: One full while loop with two counters
function kthToLastNode(k, head) {
  if(k < 1 || !head || !Number.isInteger(k)) return undefined;
  let current1 = head;
  let current2 = head;
  let height = 1;
  while(height <= k){
    if(!current1.next) return undefined
    current1 = current1.next
    height ++;
  }
  while(current1){
    current1 = current1.next;
    current2 = current2.next;
  }
  return current2.value
}