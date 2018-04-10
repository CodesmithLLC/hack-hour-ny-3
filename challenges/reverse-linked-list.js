/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let valueArr = []
    let currentVal = head.value
    let current = head
    while (current) {
      valueArr.push(current.value)
      current = current.next
    }
    let currentVal2 = head.value
    let current2 = head 
    let count = 1
    console.log(valueArr)
    while (current2 && count < 5) {
      current2.value = valueArr[valueArr.length - count]
      current2 = current2.next
      count++
    }
  }

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
