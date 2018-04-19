/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  if (!tree.left && !tree.right) return true;
  if (!tree.left) return validBST(tree.right);
  if (!tree.right) return validBST(tree.left);
  if (tree.value < tree.left.value || tree.value > tree.right.value) {
    return false;
  }
  while (tree.left) {
    return validBST(tree.left);
  }
  while (tree.right) {
    return validBST(tree.right);
  }
  return true;
}
//
// const treething = new BinaryTree(1);
// treething.right = new BinaryTree(2);
// treething.right.right = new BinaryTree(4);
// treething.right.right.left = new BinaryTree(3);
// 
// console.log(treething);
// console.log(validBST(treething));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
