class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const newVal = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      const parentVal = this.values[parentIdx];

      if (newVal > parentVal) {
        this.values[parentIdx] = newVal;
        this.values[idx] = parentVal;
        idx = parentIdx;
      } else break;
    }
  }

  extractMax() {
    const max = this.values[0];
    const last = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }

    return max;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

const mbh = new MaxBinaryHeap();
mbh.insert(55);
mbh.insert(33);
mbh.insert(39);
mbh.insert(41);
mbh.insert(60);
mbh.insert(40);
console.log(mbh.values);
console.log(mbh.extractMax());
console.log(mbh.values);
console.log(mbh.extractMax());
console.log(mbh.values);
console.log(mbh.extractMax());
console.log(mbh.values);
console.log(mbh.extractMax());
console.log(mbh.values);
console.log(mbh.extractMax());
console.log(mbh.values);
console.log(mbh.extractMax());
console.log(mbh.values);
console.log(mbh.extractMax());
console.log(mbh.values);
