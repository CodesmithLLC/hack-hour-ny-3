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

function kthToLastNode(k, head) {
  let listLength = 1;
  let currentNode = head;

  //get length of list
  while (currentNode.next){
    currentNode = currentNode.next;
    listLength++;
  }

  //reset head and go down to specified element 
  currentNode = head;
  for(let i = 1; i < listLength; i++){
    currentNode = currentNode.next;
    if(listLength - (k) === i){
      return currentNode.value;
    }
  }
}


//testing here
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode(2, a));



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
