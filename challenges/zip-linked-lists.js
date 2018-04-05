/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (l1.next === null){
    l1.next = l2;
    return l1;
  }

  l2 = zip(l1.next, l2);

  // l1.next = l2;
  // l2.next = l1Next;
  // console.log(l2Next)
  return l1;
  
};


let link1 = new Node('link1');
link1.next = new Node('link1-2');
// link1.next.next = new Node('link-1-3');


let link2 = new Node('link2');
// link2.next = new Node('link2-2');
// link2.next.next = new Node('link-2-3');

// console.log(link1, link2);

console.log(zip(link1, link2));

module.exports = {Node: Node, zip: zip};
