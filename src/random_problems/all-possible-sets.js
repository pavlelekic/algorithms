
function calcAllSets(n, numsSoFar, resultSet) {
    if (n === 0) {
        resultSet.push(numsSoFar.slice()); // clone nums and add to resultset
    } else {
        calcAllSets(n - 1, numsSoFar, resultSet);
        numsSoFar.push(n);
        calcAllSets(n - 1, numsSoFar, resultSet);
        numsSoFar.pop();
    }
}

const resultSet = [];
calcAllSets(3, [], resultSet);
console.log(JSON.stringify(resultSet));
