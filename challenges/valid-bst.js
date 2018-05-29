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
    let start = tree.value
    let left
    let right
    function recursion(tree, val) {
      if (tree.left) {
        if (tree.left.value > tree.value) {
          return false
        } else if (tree.right && tree.right.value > val)  {
          return false
        } else {
          val = tree.value
          return recursion(tree.left, val)
        }
      }
      if (tree.right) {
        if (tree.right.value < tree.value) {
          return false
        } else if (tree.left && tree.left.value < val)  {
          return false
        } else {
          val = tree.value
          return recursion(tree.right, val)
        }
      }
      return true
    }
    
    if (tree.left) {
      if (tree.left.value > tree.value) {
        return false
      } else {
        return left = recursion(tree.left, start)
      }
    }
    
    if (tree.right) {
      if (tree.right.value < tree.value) {
        return false
      } else {
        return right = recursion(tree.right, start)
      }
    }
    return left && right
  }

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
