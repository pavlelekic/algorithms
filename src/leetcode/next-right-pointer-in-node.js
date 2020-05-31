/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

function connectNode(queue) {
    if (queue.length === 0) return;
    const nextLevelQueue = [];
    let currNode;
    for (let i = 0; i < queue.length; i++) {
        currNode = queue[i];
        if (currNode !== null) {
            if (i + 1 < queue.length) {
                currNode.next = queue[i + 1];
            }
            nextLevelQueue.push(currNode.left);
            nextLevelQueue.push(currNode.right);            
        }
    }
    connectNode(nextLevelQueue);
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    connectNode([root]);
    return root;
};
