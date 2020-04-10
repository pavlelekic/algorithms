

export const serialize = function(root) {
    if (root === null) return 'x,';
    return `${root.value},${serialize(root.left)},${serialize(root.right)},`;
};

function _deserializeRecursive(queue) {
    const val = queue.pop();
    if (val === 'x') return null;
    const node = new Node(val);
    node.left = _deserializeRecursive(queue);
    node.right = _deserializeRecursive(queue);
    return node;
}

export const deserialize = function(str) {
    const queue = str.split(',');
    return _deserializeRecursive(queue);
};
