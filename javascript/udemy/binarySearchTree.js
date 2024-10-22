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
}

const bst = new BinarySearchTree();
console.log(bst.insert(10));
console.log(bst.insert(15));
console.log(bst.insert(7));
console.log(bst.insert(12));
console.log(bst.insert(10));
console.log(bst.find(12));
