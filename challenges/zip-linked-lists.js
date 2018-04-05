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

let a = {val: 1, next: {val: 3, next: null}}
let b = {val: 2, next: {val: 4, next: null}} // === {val: 1, next: {val: 2, next: {val: 3, next: {val4: null}}}}
function zip(l1, l2) {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }
  let mergedHead = l1;
  let mergedNext = l1.next;
  let toMerge = l2;
  let toMergeNext = l2.next;

  while (toMergeNext) {
    mergedHead.next = toMerge;
    toMerge = mergedNext;
    mergedNext = toMergeNext;
    toMergeNext = toMerge.next;
  }
  return mergedHead;
};
console.log(zip(a, b));
module.exports = {Node: Node, zip: zip};
