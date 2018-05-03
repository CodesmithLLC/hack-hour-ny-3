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

BinaryTree.prototype.insert = function (val) {
    if (val <= this.value) {
        if (this.left) this.left.insert(val);
        else this.left = new BinaryTree(val);
    } else {
        if (this.right) this.right.insert(val);
        else this.right = new BinaryTree(val)
    }
    return this;
}
BinaryTree.prototype.contains = function (val) {
    if (this.value === val) return true;
    if(val < this.value) {
        return !!this.left && this.left.contains(val)
    }
    if(val > this.value) {
        return !!this.right && this.right.contains(val)
    }
    return false;
}



binaryTree = new BinaryTree(5)
binaryTree.insert(4)
binaryTree.insert(7)
binaryTree.contains(4)


function validBST(tree) {
    var current = tree;
    while (current.left.value < current .value) {
        current = current.left
    }
    while (current.left.value > current .value) {
        return false
    }
    while (curent.right.value > current.value) {
        current = current.right
    }
    while (curent.right.value < current.value) {
        return false
    }
    return true
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
