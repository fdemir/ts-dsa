// BinaryTreeNode
// BinaryTree

/**
 * preOrderTraversal
 * inOrderTraversal
 * postOrderTraversal
 */

class BinarySearchTreeNode {
  constructor(
    public value: number,
    public left: BinarySearchTreeNode | null = null,
    public right: BinarySearchTreeNode | null = null
  ) {}

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}

class BinarySearchTree {
  constructor(public root: BinarySearchTreeNode | null = null) {}

  insert(value: number) {
    let newNode = new BinarySearchTreeNode(value);
    if (this.root == null) {
      this.root = newNode;

      return newNode;
    }

    // for (const currentNode of this.preOrderTraversal()) {
    //   const canInsertLeft = currentNode?.left == null;
    //   const canInsertRight = currentNode?.right == null;

    // }

    let currentNode = this.root;
    let traversing = true;

    // TODO: traverse by using yield function
    while (traversing) {
      if (currentNode.value == newNode.value) {
        throw new Error("Duplicate found.");
      } else if (newNode.value < currentNode.value) {
        if (currentNode.left == null) {
          currentNode.left = newNode;
          traversing = false;
          return true;
        } else {
          currentNode = currentNode.left;
        }
      } else if (newNode.value > currentNode.value) {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          traversing = false;
          return true;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  remove(value: number) {
    for (let node of this.preOrderTraversal()) {
      if (!node) {
        return false;
      }

      if (node.left?.value == value) {
        node.left = null;
        return true;
      }

      if (node.right?.value == value) {
        node.right = null;
        return true;
      }
    }
  }

  // BFS
  *preOrderTraversal(node = this.root): Generator<BinarySearchTreeNode | null> {
    yield node;
    if (node?.left) yield* this.preOrderTraversal(node.left);
    if (node?.right) yield* this.preOrderTraversal(node.right);
  }

  *postOrderTraversal(
    node = this.root
  ): Generator<BinarySearchTreeNode | null> {
    if (node?.left) yield* this.postOrderTraversal(node.left);
    if (node?.right) yield* this.postOrderTraversal(node.right);
    yield node;
  }

  *inOrderTraversal(node = this.root): Generator<BinarySearchTreeNode | null> {
    if (node?.left) yield* this.inOrderTraversal(node.left);
    yield node;
    if (node?.right) yield* this.inOrderTraversal(node.right);
  }
}

const myTree = new BinarySearchTree();
myTree.insert(20);
myTree.insert(30);
myTree.insert(40);
myTree.insert(900);
myTree.insert(35);

myTree.insert(2);
myTree.insert(3);
myTree.insert(4);
myTree.insert(5);
myTree.insert(6);

console.log("--- preOrder > ");

for (const iterator of myTree.preOrderTraversal()) {
  console.log(iterator?.value);
}

console.log("--- inOrder");

for (const iterator of myTree.inOrderTraversal()) {
  console.log(iterator?.value);
}

console.log("--- postOrder");

for (const iterator of myTree.postOrderTraversal()) {
  console.log(iterator?.value);
}

console.log("--- tree");

console.log(myTree);
