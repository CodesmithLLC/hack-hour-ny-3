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
  let root = tree;
  function _balanced(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    const left_balance = _balanced(tree.left);
    const right_balance = _balanced(tree.right); 
    return right_balance - left_balance;
  }
  const balance = _balanced(root);
  return (-2 < balance) && (balance < 2);
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
