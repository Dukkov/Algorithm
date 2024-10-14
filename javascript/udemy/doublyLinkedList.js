class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.head) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.head) {
      let tmp = this.tail;

      if (this.head.next) {
        this.tail = this.tail.prev;
        tmp.prev = null;
        this.tail.next = null;
      } else {
        this.head = null;
        this.tail = null;
      }

      this.length--;

      return tmp;
    } else return undefined;
  }
}

const dll = new DoublyLinkedList();

console.log(dll.push(1));
console.log(dll.push(2));
console.log(dll.pop());
console.log(dll);
console.log(dll.pop());
console.log(dll);
console.log(dll.pop());
