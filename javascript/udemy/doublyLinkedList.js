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

  shift() {
    if (this.head) {
      const tmp = this.head;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = tmp.next;
        this.head.prev = null;
        tmp.next = null;
      }

      this.length--;

      return tmp;
    } else return undefined;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.head) {
      this.head.prev = newNode;
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
    if (idx < 0 || idx >= this.length) return null;

    let currentNode;

    if (idx < this.length / 2) {
      currentNode = this.head;

      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;

      for (let i = this.length - 1; i > idx; i--) {
        currentNode = currentNode.prev;
      }
    }

    return currentNode;
  }

  set(idx, val) {
    if (idx >= 0 && idx < this.length) {
      this.get(idx).val = val;

      return true;
    } else return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);

    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    newNode.next.prev = newNode;

    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const currentNode = this.get(idx);
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    currentNode.next = null;
    currentNode.prev = null;

    this.length--;

    return currentNode;
  }

  reverse() {
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      [currentNode.next, currentNode.prev] = [
        currentNode.prev,
        currentNode.next
      ];
      currentNode = currentNode.prev;
    }

    [this.head, this.tail] = [this.tail, this.head];

    return this;
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
console.log(dll.push(10));
console.log(dll.push(20));
console.log(dll.shift());
console.log(dll.shift());
console.log(dll.shift());
console.log(dll.unshift(30));
console.log(dll.unshift(40));
console.log(dll.unshift(50));
console.log(dll.get(0));
console.log(dll.get(1));
console.log(dll.get(2));
console.log(dll.get(3));
console.log(dll.set(1, 100));
console.log(dll.set(5, 1000));
console.log(dll);
console.log(dll.insert(0, 'start'));
console.log(dll.insert(4, 'end'));
console.log(dll.insert(1, 60));
console.log(dll.insert(10, 'any'));
console.log(dll);
console.log(dll.remove(6));
console.log(dll.remove(5));
console.log(dll.remove(0));
console.log(dll.remove(7));
console.log(dll);
