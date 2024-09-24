class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let pre = this.head;
    let tmp;

    if (pre.next) {
      tmp = pre.next.val;
    } else {
      tmp = pre.val;
      this.head = null;
      this.tail = null;
      this.length = 0;

      return tmp;
    }

    while (tmp) {
      if (pre.next === this.tail) {
        this.tail = pre;
        pre.next = null;
        this.length--;

        return tmp;
      }

      pre = pre.next;
      tmp = pre.next.val;
    }
  }

  shift() {}

  unshift() {}

  get() {}

  set() {}
}

const sll = new SinglyLinkedList();

console.log(sll.push(10));
console.log(sll.push(20));
console.log(sll.push(30));
console.log(sll.pop());
console.log(sll);
console.log(sll.pop());
console.log(sll);
console.log(sll.pop());
console.log(sll);
console.log(sll.pop());
console.log(sll);
