
function isPalindrome(str, l, r, cache) {
    if (r - l < 1) return true;

    const key = `${l}:${r}`;
    if (cache[key] === undefined) {
        cache[key] = str.charAt(l) === str.charAt(r) && isPalindrome(str, l + 1, r - 1, cache);
    }

    return cache[key];
}

function findPartitions(string, startingAtPosition, currentPath, resultSet, cache) {
    if (startingAtPosition === string.length) {
        resultSet.push(currentPath.slice());
    } else {
        for (let i = startingAtPosition; i < string.length; i++) {
            if (isPalindrome(string, startingAtPosition, i, cache)) {
                currentPath.push(string.substring(startingAtPosition, i + 1));
                findPartitions(string, i + 1, currentPath, resultSet, cache);
                currentPath.pop();
            }
        }
    }
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(string) {
    const resultSet = [];
    findPartitions(string, 0, [], resultSet, {});
    // console.log(cache);
    return resultSet;
};
