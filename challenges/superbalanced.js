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
  if(!tree) return true
  let height = [0,0]
  function recursion(node,indicator){
    if(node.left) {
      if(!indicator) indicator = 'left';
      if(node.left.value < node.value) {
        recursion(node.left);
      } 
    }
    if(node.right) {
      if(!indicator) indicator = 'right';
      if(node.right.value > node.value) {
        recursion(node.right);
      }
    }
    return height;
  }
 recursion(tree)
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
