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
 * @param {number} k
 * @return {number}
 */

function findKSmallest(node, stack, k) {
    if (stack.length === k || node === null) return;
    findKSmallest(node.left, stack, k);
    if (stack.length < k) stack.push(node.val);
    findKSmallest(node.right, stack, k);
}

var kthSmallest = function(root, k) {
    const stack = [];
    findKSmallest(root, stack, k);
    return stack[k - 1];
};
