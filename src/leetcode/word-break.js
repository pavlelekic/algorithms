
function bananaSplit(string, l, dict, cache) {
    if (l >= string.length) return true;

    if (cache[l] === undefined) {
        cache[l] = false;
        let word;
        for (let r = l + 1; r <= string.length; r++) {
            word = string.substring(l, r);
            // console.log(word);
            if (dict[word] && bananaSplit(string, r, dict, cache)) {
                cache[l] = true;
                break;
            }
        }
    }
    
    return cache[l];
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(string, wordDict) {
    const dict = {};
    wordDict.forEach(w => {
        dict[w] = true;
    });
    const cache = {};
    const result = bananaSplit(string, 0, dict, cache);
    // console.log(cache);
    return result;
};


function bananaSplit(string, l, dict, cache) {
    if (l >= string.length) return true;

    if (cache[l] === undefined) {
        cache[l] = false;
        let word;
        for (let r = l + 1; r <= string.length; r++) {
            word = string.substring(l, r);
            // console.log(word);
            if (dict[word] && bananaSplit(string, r, dict, cache)) {
                cache[l] = true;
                break;
            }
        }
    }
    
    return cache[l];
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(string, wordDict) {
    const dict = {};
    wordDict.forEach(w => {
        dict[w] = true;
    });
    const cache = {};
    const result = bananaSplit(string, 0, dict, cache);
    // console.log(cache);
    return result;
};
