// 3
// / \
// 9  20
//  /  \
// 15   7
// return its zigzag level order traversal as:
// [
// [3],
// [20,9],
// [15,7]
// ]

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function buildLevel(endResult, queue, forwardDirection) {
    if (queue.length === 0) return;
    const currentLevelResult = [];
    const nextLevelQueue = [];
    let currNode;
    // console.log('Dir', forwardDirection);
    while (queue.length > 0) {
        currNode = queue.shift();
        if (currNode !== null) {
            // console.log(currNode.val);
            if (forwardDirection) {
                currentLevelResult.push(currNode.val);
            } else {
                currentLevelResult.unshift(currNode.val);
            }
            nextLevelQueue.push(currNode.left);
            nextLevelQueue.push(currNode.right);
        }
    }
    if (currentLevelResult.length > 0) {
        endResult.push(currentLevelResult);
    }
    buildLevel(endResult, nextLevelQueue, !forwardDirection);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const endResult = [];
    buildLevel(endResult, [root], true);
    return endResult;
};
