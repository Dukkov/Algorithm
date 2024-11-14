class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const newNode = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      const parentNode = this.values[parentIdx];

      if (newNode.priority < parentNode.priority) {
        this.values[parentIdx] = newNode;
        this.values[idx] = parentNode;
        idx = parentIdx;
      } else break;
    }
  }

  dequeue() {
    const minNode = this.values[0];
    const lastNode = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = lastNode;
      this.bubbleDown();
    }

    return minNode;
  }

  bubbleDown() {
    let idx = 0;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx]
      ];
      idx = swap;
    }
  }
}

const ER = new PriorityQueue();
ER.enqueue('cold', 5);
ER.enqueue('gunshot', 1);
ER.enqueue('fever', 4);
ER.enqueue('broken leg', 2);
ER.enqueue('laceration', 3);
ER.enqueue('headache', 5);
console.log(ER.values);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
