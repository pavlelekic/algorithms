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

function traverse(node, state) {
    if (node === null) return;
    if (state.k === 0) return;
    traverse(node.left, state);
    if (state.k === 0) return;
    state.k--;
    state.value = node.val;
    if (state.k === 0) return;
    traverse(node.right, state);
}

var kthSmallest = function(root, k) {
    const state = {k}; 
    traverse(root, state);
    return state.value;
};
