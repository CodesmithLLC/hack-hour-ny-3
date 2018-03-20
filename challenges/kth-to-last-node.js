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
  return helper(k, head).result

  function helper(k, node){
    let result
    if(node.next) {
      result = helper(k, node.next)
    } else {
      result = k
    }
    if(typeof result === 'object') return result
    return result > 1 ? result - 1 : {result: node.value}
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
