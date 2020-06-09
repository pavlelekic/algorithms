function dfs(numbers, currentPermutation, finalResult, position) {
    if (position === numbers.length) {
        finalResult.push(currentPermutation.slice());
    } else {
        dfs(numbers, currentPermutation, finalResult, position + 1);
        currentPermutation.push(numbers[position]);
        dfs(numbers, currentPermutation, finalResult, position + 1);
        currentPermutation.pop();  
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(numbers) {
    const result = [];
    dfs(numbers, [], result, 0);
    return result;
};
