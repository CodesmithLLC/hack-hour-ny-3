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
	let currentNode = head;
	let listCounter = 1;
	//increment counter to figure out length of list
	while (currentNode.next !== null) {
		currentNode = currentNode.next;
		listCounter += 1;
	}
	//now that we know list length we go to kthtolastnode  by starting over
	currentNode = head;
	while (listCounter - k > 0) {
		currentNode = currentNode.next;
		console.log(listCounter);
		console.log(currentNode.value);
		listCounter -= 1;
	}
	return currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
