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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root === null) return null;
    const stack = [root];
    let prevNode;
    let currentNode;

    while(stack.length > 0) {
        currentNode = stack.pop();
        if (prevNode) {
            prevNode.right = currentNode;
        }
        
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
        }

        currentNode.left = null;
        prevNode = currentNode;
    }
    
    return root;
};