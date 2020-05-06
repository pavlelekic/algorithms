
function _minDistance(cache, a, b, indexA, indexB) {
    if (indexA === 0) return indexB;
    if (indexB === 0) return indexA;

    const ck = `${indexA}:${indexB}`;
    if (typeof cache[ck] === 'undefined') {
        if (a.charAt(indexA - 1) === b.charAt(indexB - 1)) {
            cache[ck] = _minDistance(cache, a, b, indexA - 1, indexB - 1); // do nothing
        } else {
            cache[ck] = Math.min(
                _minDistance(cache, a, b, indexA, indexB - 1), // remove
                _minDistance(cache, a, b, indexA - 1, indexB), // insert
                _minDistance(cache, a, b, indexA - 1, indexB - 1) // update
            ) + 1;
        }
    }

    return cache[ck];
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(a, b) {
    return _minDistance({}, a, b, a.length, b.length);
};