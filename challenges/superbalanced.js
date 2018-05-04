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
    if (!tree) return true;

    let leftDepth = 0;
    let rightDepth = 0;

    function leftTree(node){
      if (!node) return;

      if (node.left){
        leftDepth++;
        leftTree(node.left);
      } else if (node.right && leftDepth === 0){
        leftTree(node.right);
      }
    }

    function rightTree(node){
      if (!node) return;
      
      if (node.right){
        rightDepth++;
        rightTree(node.right);
      }
    }

    leftTree(tree);
    rightTree(tree);

    console.log('left: ', leftDepth, "right: ", rightDepth);

    return leftDepth;

}

let tree = new BinaryTree(3);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(10);
tree.left.left = new BinaryTree(1);
//console.log(tree);

console.log(superbalanced(tree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
