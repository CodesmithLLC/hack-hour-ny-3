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
  if (!tree.left && tree.value < tree.right.value) return validBST(tree.right);
  if (!tree.right && tree.value > tree.left.value) return validBST(tree.left);
  if (tree.left && tree.value < tree.left.value) return false;
  if (tree.right && tree.value > tree.right.value) return false;
  while (tree.left) {
    return validBST(tree.left);
  }
  while (tree.right) {
    return validBST(tree.right);
  }
  return true;
}

// const treething = new BinaryTree(5);
// treething.left = new BinaryTree(4);
// treething.left.right = new BinaryTree(6);
// treething.right = new BinaryTree(9);
// treething.right.left = new BinaryTree(10);

console.log(treething);
console.log(validBST(treething));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
