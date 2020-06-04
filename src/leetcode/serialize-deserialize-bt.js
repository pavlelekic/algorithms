
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 1
// / \
// 2   3
//  / \
// 4   5

// as "[1,2,3,null,null,4,5]"

function __serialize(node, resultArr) {
    if (node === null) {
        resultArr.push('X');
    } else {
        resultArr.push(node.val);
        __serialize(node.left, resultArr);
        __serialize(node.right, resultArr);
    }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
export const serialize = function(root) {
    const resultArr = [];
    __serialize(root, resultArr);
    // console.log('Serialization: ', JSON.stringify(resultArr));
    return resultArr.join(',');
};

function __deserialize(itemsLeft) {
    if (itemsLeft.length === 0) return null;

    const currentItem = itemsLeft.shift();

    if (currentItem === "X") {
        return null;
    } else {
        // console.log(currentItem);
        const resultNode = new TreeNode(currentItem);
        resultNode.left = __deserialize(itemsLeft);
        resultNode.right = __deserialize(itemsLeft);
        return resultNode;
    }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
export const deserialize = function(data) {
    const items = data.split(',');
    const root = __deserialize(items);
    // console.log(JSON.stringify(root, null, '  '));
    return root;
};
