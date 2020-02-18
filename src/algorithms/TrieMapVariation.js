// @flow

function Trie() {
    this._root = new Node();
}

Trie.prototype.put = function(key/*: string*/, value/*: any*/) {
    this._root.put(key, value, 0);
}


// private class
function Node() {
    this._childNodes = {};
}

Node.prototype.put = function(key/*: string*/, value/*: any*/, level /*: number*/) {
    if (level < key.length) {
        var currentChar = key.charAt(level);
        
        if (!this._childNodes[currentChar]) {
            this._childNodes[currentChar] = new Node();
        }
        
        this._childNodes[currentChar].put(key, value, level + 1);
    }
    else {
        // this is the case where level === key.length

        this._value = value;
    }
}

module.exports = Trie;
