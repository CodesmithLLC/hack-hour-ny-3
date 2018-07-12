/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */



// Solution 1
// function addLinkedList(num1, num2, carryover) {
//   var current1  = num1.next
//   var current2  = num2.next
//   var tempvalue;
//   var answerlist;

//   answerlist = new Node((num1.value + num2.value)%10);
//   carryover = (num1.value + num2.value)/10<1 ? 0 : 1;

//   while(current1 || current2 || carryover===1){
//     var currentanswer = answerlist
//     while(currentanswer.next){
//       currentanswer = currentanswer.next
//     }
//     if (!current1 && !current2){
//       currentanswer.next = new Node(carryover);
//       carryover = 0;
//     }
//     else if (!current2){
//       tempvalue = current1.value + carryover;
//       currentanswer.next = new Node(tempvalue%10);
//       carryover = tempvalue/10<1 ? 0 : 1;
//       current1 = current1.next;
//     }
//     else if (!current1){
//       tempvalue = current2.value + carryover;
//       currentanswer.next = new Node(tempvalue%10);
//       carryover = tempvalue/10<1 ? 0 : 1;
//       current2 = current2.next;
//     }
//     else{
//       tempvalue = current1.value + current2.value + carryover;
//       currentanswer.next = new Node(tempvalue%10);
//       carryover = tempvalue/10<1 ? 0 : 1;
//       current1 = current1.next;
//       current2 = current2.next;
//     }
//   }
//   return answerlist;
// }

// Solution 2
// var zero = new Node(0);
// zero.next = zero;

// function addLinkedList(num1, num2, carryover) {
//   var node1 = num1, node2 = num2, ansNode;
//   var ansList = ansNode = new Node(node1.value + node2.value);
//   while (node1 || node2) {
//     node1 = node1.next || zero;
//     node2 = node2.next || zero;
//     if (node1 === zero && node2 === zero) break;
//     ansNode.next = new Node(node1.value + node2.value);
//     ansNode = ansNode.next;
//   }
//   //handle the carry-overs. this loop handles all but the last digit
//   for (ansNode = ansList; ansNode.next; ansNode = ansNode.next) {
//     ansNode.next.value += Math.floor(ansNode.value / 10);
//     ansNode.value %= 10;
//   }
//   //handle the last digit
//   if (ansNode.value >= 10) {
//     ansNode.next = new Node(1);
//     ansNode.value %= 10;
//   }
//   return ansList;
// }
function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(num1, num2) {
  // Start newList, define variables for linked list
  let newList = new Node((num1.value + num2.value) % 10);
  let carryover = (num1.value + num2.value) > 10 ? 1 : 0;
  let l1Curr = num1.next;
  let l2Curr = num2.next;
  let newListCurr = newList;
  // Traverse through both list and add to new linked list
  while(l1Curr && l2Curr){
    newListCurr.next = new Node((l1Curr.value + l2Curr.value + carryover) % 10);
    carryover = (l1Curr.value + l2Curr.value + carryover) >= 10 ? 1 : 0;
    l1Curr = l1Curr.next;
    l2Curr = l2Curr.next;
    newListCurr = newListCurr.next;
  }
  // Add the rest to newList
  newListCurr.next = l1Curr ? l1Curr : l2Curr;
  if(!carryover || (carryover + newListCurr.next.value) < 10) {
    if(newListCurr.next) newListCurr.next.value += carryover;
  }
  else if(carryover && !l1Curr && !l2Curr) newListCurr.next = new Node(1);
  else {
    while(newListCurr.next && newListCurr.next.value + carryover === 10) {
      newListCurr.next.value = 0;
      newListCurr = newListCurr.next
    }
    if(!newListCurr.next && carryover === 1) newListCurr.next = new Node(1);
    else newListCurr.next.value ++; 
  }
  return newList;
}

// Create input arguments
let l1 = new Node(2);
l1.next = new Node(1);
l1.next.next = new Node(7);
l1.next.next.next = new Node(7);


let l2 = new Node(5);
l2.next = new Node(9);
l2.next.next = new Node(2);




// let l1 = new Node(2);
// l1.next = new Node(1);
// l1.next.next = new Node(8);
// l1.next.next.next = new Node(9)

// let l2 = new Node(5);
// l2.next = new Node(9);
// l2.next.next = new Node(2);

console.log(display(addLinkedList(l1,l2)))




function display(head){
  let current = head;
  while (current){
      console.log(current.value)
      current = current.next
  }
}

module.exports = {Node: Node, addLinkedList: addLinkedList};