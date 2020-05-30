/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Given rootFirstOrder and rootMiddleOrder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// rootFirstOrder = [3,9,20,15,7]    root, left, right
// rootMiddleOrder = [9,3,15,20,7]     left, root, right
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

function findRootIndex(rootFirstOrder, rootMiddleIndexLookup, l, r) {
    let index;
    for (let i = 0; i < rootFirstOrder.length; i++) {
        index = rootMiddleIndexLookup[rootFirstOrder[i]];
        if (index >= l && index <= r) return index;
    }
    throw new Error(`Could not find root el that belongs to ${l} - ${r} range.`);
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

 /**
 * @param {number[]} rootFirstOrder
 * @param {number[]} rootMiddleOrder
 * @return {TreeNode}
 */

function buildSubtree(rootFirstOrder, rootMiddleOrder, l, r, rootMiddleIndexLookup) {
    // console.log(l, r);
    if (l > r) return null;
    if (l === r) return new TreeNode(rootMiddleOrder[l]);

    const rootIndex = findRootIndex(rootFirstOrder, rootMiddleIndexLookup, l, r);

    return new TreeNode(
        rootMiddleOrder[rootIndex],
        buildSubtree(rootFirstOrder, rootMiddleOrder, l, rootIndex - 1, rootMiddleIndexLookup),
        buildSubtree(rootFirstOrder, rootMiddleOrder, rootIndex + 1, r, rootMiddleIndexLookup)
    );
}

var buildTree = function(rootFirstOrder, rootMiddleOrder) {
    const rootMiddleIndexLookup = {};
    for (let i = 0; i < rootMiddleOrder.length; i++) {
        rootMiddleIndexLookup[rootMiddleOrder[i]] = i;
    }
    return buildSubtree(rootFirstOrder, rootMiddleOrder, 0, rootFirstOrder.length - 1, rootMiddleIndexLookup);
};
