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

function superbalanced(tree, level = 0, levels = []) {
  if (!tree) {
    levels.push(level - 1)
    console.log(levels)
    return Math.max(...levels) - Math.min(...levels) <= 1
  }
  superbalanced(tree.left, level + 1)
  superbalanced(tree.right, level + 1)
}

const tree = new BinaryTree(5)
const left = tree.left = new BinaryTree(4)
const right = tree.right = new BinaryTree(7)

left.left = new BinaryTree(2)
left.right = new BinaryTree(3)

right.left = new BinaryTree(6)
right.right = new BinaryTree(8)

console.log(superbalanced(tree))
module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
