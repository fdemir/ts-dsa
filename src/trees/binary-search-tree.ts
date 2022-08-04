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
    let currentNode = this.root;
    let traversing = true;

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

  search(value: number) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value == value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return null;
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

  // Depth-first search(DFS) Algorithm

  /**
   * traverses from the root to the left subtree then to the right subtree.
   *
   * NLR
   */
  *preOrderTraversal(node = this.root): Generator<BinarySearchTreeNode | null> {
    yield node;
    if (node?.left) yield* this.preOrderTraversal(node.left);
    if (node?.right) yield* this.preOrderTraversal(node.right);
  }

  /**
   * LRN
   */
  *postOrderTraversal(
    node = this.root
  ): Generator<BinarySearchTreeNode | null> {
    if (node?.left) yield* this.postOrderTraversal(node.left);
    if (node?.right) yield* this.postOrderTraversal(node.right);
    yield node;
  }

  /**
   * LNR
   */
  *inOrderTraversal(node = this.root): Generator<BinarySearchTreeNode | null> {
    if (node?.left) yield* this.inOrderTraversal(node.left);
    yield node;
    if (node?.right) yield* this.inOrderTraversal(node.right);
  }
}

export { BinarySearchTree };
