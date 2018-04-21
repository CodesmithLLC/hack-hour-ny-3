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
    if (tree !== null) {
        let value = tree.value;

        if (tree.left && !(tree.left.value < tree.value)) return false;
        if (tree.right && !(tree.right.value > tree.value)) return false;

        return true;
    }

}


// let current = tree;
// let left = false;
// let right = false;
// while (current.left !== null){
//     if (current.left.value < current.value) {
//         current = current.left;
//     } else {
//         return false;
//     }
// }
// left = true;

// while (current.right !== null){
//     if (current.right !== null){
//         if (current.left.value < current.value) {
//             current = current.left;
//         } else {
//             return false;
//         }
//     }
// }
// right = true;
// if (left && right) return true;


let newBinaryTree = new BinaryTree(20);

newBinaryTree.left = new BinaryTree(19);
newBinaryTree.right = new BinaryTree(22);
// console.log(newBinaryTree);

console.log(validBST(newBinaryTree));


module.exports = { BinaryTree: BinaryTree, validBST: validBST };
