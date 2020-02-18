// @flow

function Trie() {
    this._root = new Node();
}

Trie.prototype.put = function(key/*: string*/, value/*: any*/) {
    this._root.put(key, value, 0);
}

Trie.prototype.getAllStartingWith = function(searchTerm/*: string*/) {
    var result = [];
    this._root.fillInValuesStartingWith(searchTerm, 0, result);

    return result;
}

var ALPHABET_OFFSET = 'a'.charCodeAt(0);

// private class
function Node() {
    this._childNodes = new Array(26);
}

Node.prototype.put = function(key/*: string*/, value/*: any*/, level /*: number*/) {
    if (level < key.length) {
        var currentChar = key.charCodeAt(level) - ALPHABET_OFFSET;
        
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

Node.prototype.fillInValuesStartingWith = function(searchTerm/*: string*/, level /*: number*/, values /*: Array<any>*/) {
    if (level < searchTerm.length) {
        var currentChar = searchTerm.charCodeAt(level) - ALPHABET_OFFSET;
        
        if (!this._childNodes[currentChar]) {
            return [];
        }
        
        return this._childNodes[currentChar].getAllStartingWith(searchTerm, level + 1);
    }
    else {
        // this is the case where level === key.length

        this._value = value;
    }
}

Node.prototype.fillInValues = function(values /*: Array<any>*/) {
    if (this._value) {
        values.push(this._value);
    }

    for (var i = 0; i < 26; i++) {
        if (this._childNodes[i]) {
            this._childNodes[i].fillInValues(values);
        }
    }
}

module.exports = Trie;
