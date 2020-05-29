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
 * @return {number[]}
 */

function traverse(node, resultArr) {
    if (node === null) return;
    traverse(node.left, resultArr);
    resultArr.push(node.val);   
    traverse(node.right, resultArr);
}

var inorderTraversal = function(root) {
    const resultArr = [];
    traverse(root, resultArr);
    return resultArr;
};
