/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function sumSubtree(node) {
    if (node === null) return 0;
    let sum = 0;
    if (node.val % 2 === 0) { // sum grand children
        if (node.left !== null) {
            sum += node.left.left === null ? 0 : node.left.left.val;
            sum += node.left.right === null ? 0 : node.left.right.val;
        }
        if (node.right !== null) {
            sum += node.right.left === null ? 0 : node.right.left.val;
            sum += node.right.right === null ? 0 : node.right.right.val;
        }
    }

    return sum + sumSubtree(node.left) + sumSubtree(node.right);
}

export default function(root) {
    return sumSubtree(root);
}
