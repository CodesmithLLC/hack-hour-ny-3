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
  var count1 = 0;
  var count2 = 0;

  function checkLeft(tree) {
    var innerCount = 0

    if (tree.left) {
      count1 += 1;
      innerCount += 1;
      return checkLeft(tree.left);
    }

    if (tree.right) {
      return checkLeft(tree.right);
    }

    innerCount === 0 ? count1 += 1 : count1;
    return;
  }


  function checkRight(tree) {
    var innerCount1 = 0

    if (tree.left) {
      count2 += 1;
      innerCount1 += 1;
      return checkRight(tree.left);
    }

    if (tree.right) {
      return checkRight(tree.right);
    }

    return innerCount1 === 0 ? count2 += 1 : count2;
  }

  checkLeft(tree.left);
  checkRight(tree.right);

  return [count1, count2];
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
