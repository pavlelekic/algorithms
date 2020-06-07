/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number}g k
 * @return {number}
 */

function findKSmallest(node, stack, k) {
    if (stack.length === k || node === null) return;
    findKSmallest(node.left);
    if (stack.length < k) stack.push(node.val);
    findKSmallest(node.right);
}

var kthSmallest = function(root, k) {
    const stack = [];
    findKSmallest(root, stack, k);
    return stack[k - 1];
};
