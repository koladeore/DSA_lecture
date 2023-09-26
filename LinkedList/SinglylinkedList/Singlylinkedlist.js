// 10--->5---->16
// append is adding to the list

// 1--->10--->5---->16
// prepend is adding to the beginning of the list

// 1--->10--->99-->5---->16
// we insert 99 at 2

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head; // because the head and tail are 10 for the first node
    this.length = 1 // because we have one which is 10
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; // point to the new node we created
    this.tail = newNode; // the tail will now be the new node
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1); //point it to 10 in the list
    const holdingPointer = leader.next; // leader.next is the 5
    leader.next = newNode; // update leader.next to the new node
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1); // get 10
    const unwantedNode = leader.next; // get 99 which will be remove so 10 is pointing to 5
    leader.next = unwantedNode.next; // get 5
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    this.tail = this.head;
    let previous = this.head;
    let current = previous.next;
    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head.next = null;
    this.head = previous;
    return this.printList();
  }
}
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());


function reverseList(head){
  let previous = null;
  let current = head;
  while(current){
    const next = current.next
    current.next = previous;
    previous = current;
    current = next
  }
  return previous
} //0(n)  space//0(1)
