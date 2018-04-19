/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

// function zip(l1, l2) {
//   let val1 = next1 = l1;
//   let val2 = next2 = l2;
//   while(next1 && next2){
//     val2 = val2.next;
//     next2.next = new Node(val1.value);
//     val1 = val1.next;
//   }
//   if (!l2 || !l2.value) return l1
// };


function zip(l1, l2) {
  // Setting pointer variables.
  let curr1 = rest1 = l1;
  let curr2 = rest2 = l2;

  // Zip until we reach the end of one/both of the lists.
  while (curr1 && curr2) {
    // Moving temp pointers.
    if (rest1) rest1 = rest1.next;
    if (rest2) rest2 = rest2.next;

    // Zipping / alternating.
    curr1.next = curr2;
    if (rest1) curr2.next = rest1;

    // Moving curr pointers.
    curr1 = rest1;
    curr2 = rest2;
  }
  // Return first list if it exists, second if first is null.
  // Will return null (via l2) if both are null.
  return l1 || l2;
}
module.exports = {Node: Node, zip: zip};



