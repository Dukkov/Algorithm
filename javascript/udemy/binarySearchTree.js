class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (this.root) {
      let currentNode = this.root;

      while (currentNode) {
        if (val === currentNode.val) return undefined;

        if (val > currentNode.val) {
          if (currentNode.right) currentNode = currentNode.right;
          else {
            currentNode.right = newNode;
            break;
          }
        } else {
          if (currentNode.left) currentNode = currentNode.left;
          else {
            currentNode.left = newNode;
            break;
          }
        }
      }
    } else this.root = newNode;

    return this;
  }

  find(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) return currentNode;

      if (val > currentNode.val) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }

    return false;
  }

  BFS() {
    const visited = [];
    const queue = [];
    let dequeuedNode;
    queue.push(this.root);

    while (queue.length) {
      dequeuedNode = queue.shift();

      if (dequeuedNode.left) queue.push(dequeuedNode.left);
      if (dequeuedNode.right) queue.push(dequeuedNode.right);

      visited.push(dequeuedNode.val);
    }

    return visited;
  }

  preOrderDFS() {
    const visited = [];

    const traverse = (node) => {
      visited.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return visited;
  }

  postOrderDFS() {
    const visited = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      visited.push(node.val);
    };

    traverse(this.root);

    return visited;
  }

  inOrderDFS() {
    const visited = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return visited;
  }
}

const bst = new BinarySearchTree();
console.log(bst.insert(10));
console.log(bst.insert(15));
console.log(bst.insert(6));
console.log(bst.insert(3));
console.log(bst.insert(8));
console.log(bst.insert(20));
console.log(bst.BFS());
console.log(bst.preOrderDFS());
console.log(bst.postOrderDFS());
console.log(bst.inOrderDFS());
