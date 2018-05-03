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
  let result = true;
  function balanced(node, countLeft, countRight) {
    let countL = countLeft;
    let countR = countRight;
    if (Math.abs(countL - countR) > 1) result = false;
    if (node.left && node.right) {
      countL += 1;
      countR += 1;
      balanced(node.left, countL, countR);
      balanced(node.right, countL, countR);
    } else if (node.left) {
      countL += 1;
      balanced(node.left, countL, countR);
    } else if (node.right) {
      countR += 1;
      balanced(node.right, countL, countR);
    }
  }
  balanced(tree, 0, 0);
  return result;
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
