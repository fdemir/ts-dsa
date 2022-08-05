import { BinarySearchTree } from "./binary-search-tree";

describe("Binary Search Tree", () => {
  let treeOfLife: BinarySearchTree;

  beforeEach(() => {
    treeOfLife = new BinarySearchTree();
  });

  it("adds a node to the tree", () => {
    treeOfLife.insert(1);
    expect(treeOfLife.root?.value).toBe(1);
  });

  it("traverses the tree in pre-order", () => {
    treeOfLife.insert(10);
    treeOfLife.insert(5);
    treeOfLife.insert(20);
    let traverseFunc = treeOfLife.preOrderTraversal();
    expect(traverseFunc.next().value.value).toBe(10);
    expect(traverseFunc.next().value.value).toBe(5);
    expect(traverseFunc.next().value.value).toBe(20);
  });

  it("traverses the tree in post-order", () => {
    treeOfLife.insert(10);
    treeOfLife.insert(5);
    treeOfLife.insert(20);
    let traverseFunc = treeOfLife.postOrderTraversal();
    expect(traverseFunc.next().value.value).toBe(5);
    expect(traverseFunc.next().value.value).toBe(20);
    expect(traverseFunc.next().value.value).toBe(10);
  });

  it("traverses the tree in in-order", () => {
    treeOfLife.insert(10);
    treeOfLife.insert(5);
    treeOfLife.insert(20);
    let traverseFunc = treeOfLife.inOrderTraversal();
    expect(traverseFunc.next().value.value).toBe(5);
    expect(traverseFunc.next().value.value).toBe(10);
    expect(traverseFunc.next().value.value).toBe(20);
  });

  it("adds multiple nodes to the tree", () => {
    treeOfLife.insert(30);
    treeOfLife.insert(20);
    treeOfLife.insert(40);

    let traverseFunc = treeOfLife.preOrderTraversal();
    expect(traverseFunc.next().value.value).toBe(30);
    expect(traverseFunc.next().value.value).toBe(20);
    expect(traverseFunc.next().value.value).toBe(40);
  });

  it("removes a node from the tree", () => {
    treeOfLife.insert(30);
    treeOfLife.insert(20);
    treeOfLife.insert(40);
    treeOfLife.remove(20);
    let traverseFunc = treeOfLife.preOrderTraversal();
    expect(traverseFunc.next().value.value).toBe(30);
    expect(traverseFunc.next().value.value).toBe(40);
  });

  it("search for a node in the tree", () => {
    treeOfLife.insert(10);
    treeOfLife.insert(3);
    treeOfLife.insert(302);
    expect(treeOfLife.search(3)?.value).toBe(3);
  });
});
