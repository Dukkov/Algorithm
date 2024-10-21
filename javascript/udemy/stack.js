class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.first) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (this.first) {
      const poppedNode = this.first;

      if (this.first === this.last) {
        this.first = null;
        this.last = null;
      } else {
        this.first = poppedNode.next;
        poppedNode.next = null;
      }

      this.size--;

      return poppedNode.val;
    } else return null;
  }
}

const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
