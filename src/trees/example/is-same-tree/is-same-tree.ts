import { BinarySearchTreeNode as TreeNode } from "../../binary-search-tree";

// T(n) = O(p + n)
function isSameTree(p: TreeNode | null, q: TreeNode | null) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.value != q.value) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

export { isSameTree };
