/**
 * @param {number} n
 * @return {string[]}
 */

function generateComb(pathSoFar, stackSize, parensLeft, resultSet) {
    if (parensLeft === 0) {
        resultSet.push(pathSoFar);
    } else {
        if (stackSize > 0) {
            generateComb(pathSoFar + ')', stackSize - 1, parensLeft - 1, resultSet);
        }
        if (stackSize < parensLeft) {
            generateComb(pathSoFar + '(', stackSize + 1, parensLeft - 1, resultSet);
        }
    }
}

var generateParenthesis = function(stackSize) {
    const resultSet = [];
    generateComb('', 0, stackSize * 2, resultSet);
    return resultSet;
};
