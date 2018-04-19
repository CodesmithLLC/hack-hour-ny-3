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

function validBST(node, prev = node.value, cb = null) {
    if (!node) return true
    else if(cb && !cb(node.value)) return false

    return validBST(node.left, node.value, (v) => v < node.value) && 
        validBST(node.right, node.value, (v) => v > node.value)
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
