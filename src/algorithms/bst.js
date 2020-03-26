
class Node {
    constructor(value) {
        this.value = value;
    }
    letf = undefined;
    right = undefined;
}

export default class BST {
    root = undefined;

    addNode(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            this._addNodeRecursive(value, this.root);
        }
    }

    _addNodeRecursive(value, subtreeRoot) {
        if (value > subtreeRoot.value) {
            if (!subtreeRoot.right) {
                subtreeRoot.right = new Node(value);
            } else {
                this._addNodeRecursive(value, subtreeRoot.right);
            }
        }
        else {
            if (!subtreeRoot.left) {
                subtreeRoot.left = new Node(value);
            } else {
                this._addNodeRecursive(value, subtreeRoot.left);
            }
        }
    }
}
