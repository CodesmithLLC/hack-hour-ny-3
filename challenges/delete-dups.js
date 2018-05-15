// import { exists } from "fs";

/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

//  look at heads value
//  save value
//  go to the next head value
//  check to see if that value already exists in save

// if it does, 
//      point next from current head to the one after it
// else save it

// go to the next one and repeat until there is no more next




class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }
    
    addToHead(value) {
        const newNode = { value }; // 1
        newNode.next = this.head;  // 2
        this.head = newNode;       // 3
        this.length++;
        return this;
    }
}
const list = new LinkedList('first')
    list.addToHead('second')
    list.addToHead('second')
    console.log(list.addToHead('second'));
    
    
function deleteDups(head) {
    var save = [];
    var current = head;
    save.push(head.value);
    while (current) {
        console.log(save)
        if(save.includes(current.next.value)){
            current.next = current.next.next
        } else {
        //     save.push(current.next.value)
        // }
        current = current.next
    }
}
deleteDups(list)
console.log(list)

// module.exports = deleteDups;
