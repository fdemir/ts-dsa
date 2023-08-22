import { BinarySearchTree } from "./binary-search-tree.ts";
import { assertEquals, beforeEach, describe, it } from "../deps.ts";

describe("Binary Search Tree", () => {
  let treeOfLife: BinarySearchTree;

  beforeEach(() => {
    treeOfLife = new BinarySearchTree();
  });

  it("adds a node to the tree", () => {
    treeOfLife.insert(1);
    assertEquals(treeOfLife.root?.value, 1);
  });

  it("traverses the tree in pre-order", () => {
    treeOfLife.insert(10);
    treeOfLife.insert(5);
    treeOfLife.insert(20);
    let traverseFunc = treeOfLife.preOrderTraversal();
    assertEquals(traverseFunc.next().value.value, 10);
    assertEquals(traverseFunc.next().value.value, 5);
    assertEquals(traverseFunc.next().value.value, 20);
  });

  it("traverses the tree in post-order", () => {
    treeOfLife.insert(10);
    treeOfLife.insert(5);
    treeOfLife.insert(20);
    let traverseFunc = treeOfLife.postOrderTraversal();
    assertEquals(traverseFunc.next().value.value, 5);
    assertEquals(traverseFunc.next().value.value, 20);
    assertEquals(traverseFunc.next().value.value, 10);
  });

  it("traverses the tree in in-order", () => {
    treeOfLife.insert(10);
    treeOfLife.insert(5);
    treeOfLife.insert(20);
    let traverseFunc = treeOfLife.inOrderTraversal();
    assertEquals(traverseFunc.next().value.value, 5);
    assertEquals(traverseFunc.next().value.value, 10);
    assertEquals(traverseFunc.next().value.value, 20);
  });

  it("adds multiple nodes to the tree", () => {
    treeOfLife.insert(30);
    treeOfLife.insert(20);
    treeOfLife.insert(40);

    let traverseFunc = treeOfLife.preOrderTraversal();
    assertEquals(traverseFunc.next().value.value, 30);
    assertEquals(traverseFunc.next().value.value, 20);
    assertEquals(traverseFunc.next().value.value, 40);
  });

  it("removes a node from the tree", () => {
    treeOfLife.insert(30);
    treeOfLife.insert(20);
    treeOfLife.insert(40);
    treeOfLife.remove(20);
    let traverseFunc = treeOfLife.preOrderTraversal();
    assertEquals(traverseFunc.next().value.value, 30);
    assertEquals(traverseFunc.next().value.value, 40);
  });

  it("search for a node in the tree", () => {
    treeOfLife.insert(10);
    treeOfLife.insert(3);
    treeOfLife.insert(302);
    assertEquals(treeOfLife.search(3)?.value, 3);
  });
});
