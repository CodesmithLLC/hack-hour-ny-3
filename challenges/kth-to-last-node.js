/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
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
  let length = 0;
  let goal= 0;
  let result;

  function count(node){
    length += 1
    if(node.next){
      count(node.next)
    }else return;
  }
  count(head);

  function goalCount(node){
    goal += 1
    if(goal !== length - k + 1){
      goalCount(node.next)
    }else {result = node}
  }
  goalCount(head);

  console.log(length,goal,result.value);
  return (result.value)
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
