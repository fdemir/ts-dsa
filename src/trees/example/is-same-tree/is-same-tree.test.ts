// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
import { assertEquals, describe, it } from "../../../deps.ts";
import { BinarySearchTreeNode as TreeNode } from "../../binary-search-tree.ts";
import { isSameTree } from "./is-same-tree.ts";

describe("is same tree", () => {
  it("should return true if the trees are the same", () => {
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    assertEquals(isSameTree(tree1, tree2), true);
  });

  it("should return false if the trees are not the same", () => {
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(4));
    assertEquals(isSameTree(tree1, tree2), false);
  });
});
