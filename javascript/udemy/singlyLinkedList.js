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

  shift() {
    if (this.head) {
      const prevHead = this.head;
      this.head = this.head.next;
      this.length--;

      return prevHead;
    } else {
      return undefined;
    }
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;

    let element = this.head;

    for (let counter = 0; counter < idx; counter++) {
      element = element.next;
    }

    return element;
  }

  set(val, idx) {
    const getResult = this.get(idx);

    if (getResult) {
      getResult.val = val;

      return true;
    }

    return false;
  }

  insert(val, idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const getResult = this.get(idx - 1);
    newNode.next = getResult.next;
    getResult.next = newNode;
    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const getResult = this.get(idx - 1);
    const removedNode = getResult.next;
    getResult.next = removedNode.next;
    this.length--;

    return removedNode;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let tmp;
    this.head = this.tail;
    this.tail = current;

    for (let i = 0; i < this.length; i++) {
      tmp = current.next;
      current.next = prev;
      prev = current;
      current = tmp;
    }

    return this;
  }
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
console.log(sll.push(11));
console.log(sll.push(13));
console.log(sll.shift());
console.log(sll);
console.log(sll.unshift(10));
console.log(sll.pop());
console.log(sll.pop());
console.log(sll.unshift(5));
console.log(sll.unshift(6));
console.log(sll.get(1));
console.log(sll.set(30, 2));
console.log(sll);
console.log(sll.insert(11, 0));
console.log(sll);
console.log(sll.remove(1));
console.log(sll);
console.log(sll.push(20));
console.log(sll.push(30));
console.log(sll.reverse());
