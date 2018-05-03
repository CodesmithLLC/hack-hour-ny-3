/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  let isBalanced = true
  heightDiff(tree)
  return isBalanced

  function heightDiff(tree) {
    const leftHeight = tree.left ? heightDiff(tree.left) : 0
    const rightHeight = tree.right ? heightDiff(tree.right) : 0
    if (Math.abs(leftHeight - rightHeight) > 1) isBalanced = false
    return Math.max(leftHeight, rightHeight) + 1
  }
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
