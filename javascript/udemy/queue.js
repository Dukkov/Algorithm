class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.first) this.last.next = newNode;
    else this.first = newNode;

    this.last = newNode;

    return ++this.size;
  }

  dequeue() {
    if (this.first) {
      const removedNode = this.first;

      if (this.first === this.last) {
        this.first = null;
        this.last = null;
      } else {
        this.first = removedNode.next;
        removedNode.next = null;
      }

      this.size--;

      return removedNode.val;
    } else return null;
  }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
