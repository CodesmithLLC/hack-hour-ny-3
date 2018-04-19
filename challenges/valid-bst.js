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
    const validLeft = tree.left === null ? true
        : tree.left.value < tree.value && validBST(tree.left)

    const validRight = tree.right === null ? true
        : tree.right.value > tree.value && validBST(tree.right)

    // console.log(tree.left.value, tree.value, tree.right.val)
    // console.log(validLeft, validRight)
    return validLeft && validRight
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
