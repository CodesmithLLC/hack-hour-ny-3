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

function  minLevels(tree) {
  if (!tree.right && !tree.left) return 0
  return 1 + Math.min(minDepth(tree.left), minDepth(tree.right))
}

function maxLevels(tree) {
  if (!tree.right && !tree.left) return 0
  
  return 1 + Math.max(minDepth(tree.left), minDepth(tree.right))
}

function superbalanced(tree) {
  if (maxLevels(tree) + 1 || maxLevels(tree) === minLevel(tree) - 1 || minLevels(tree)) return true
  return false
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
