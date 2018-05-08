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

function validBST(tree, previousTests = []) {
    const leftTests = [...previousTests, n => n < tree.value]
    const rightTests = [...previousTests, n => n > tree.value]

    const validLeft = tree.left === null ? true :
        leftTests.every(test => test(tree.left.value)) && validBST(tree.left, leftTests)

    const validRight = tree.right === null ? true :
        rightTests.every(test => test(tree.right.value)) && validBST(tree.right, rightTests)

    return validLeft && validRight
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
