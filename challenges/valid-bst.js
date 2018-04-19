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
    function recursion(node){
      console.log('times',node)
      if(node.left) {
        if(node.left.value < node.value) recursion(node.left);
        else return false
      }
      if(node.right) {
        if(node.right.value > node.value) recursion(node.right);
        else return false
      }
    }
    return (recursion(tree) === false) ? false:true;
  }
  
//   let tree = {value:5,
//   left:{value:3,
//     left:{value:1,
//       left:null,
//       right:null
//     },
//     right:{value:4,
//       left:null,
//       right:null,
//     }
//   },
//   right:{value:9,
//     left:{value: 8,
//       left:null,
//       right: null,
//     },
//     right:{value:10,
//       left:null,
//       right:null,
//     }
//   },
//   }
  
//   validBST(tree)

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
