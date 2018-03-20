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
  for(let i = 0; i <= listLength; i++){ 
    if(listLength - (k) === i){
      return currentNode.value;
    }
    currentNode = currentNode.next;
  } return undefined;

}


//testing here
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// const ef = new Node('Ef');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = ef;

// console.log(kthToLastNode(6, a));



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
