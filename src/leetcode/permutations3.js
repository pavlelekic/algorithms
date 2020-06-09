function dfs(numbers, used, currentPermutation, finalResult) {
    if (currentPermutation.length === numbers.length) {
        finalResult.push(currentPermutation.slice());
    } else {
        numbers.forEach(number => {
           if (!used[number]) {
               used[number] = true;
               currentPermutation.push(number);
               dfs(numbers, used, currentPermutation, finalResult);
               currentPermutation.pop();
               used[number] = false;
           } 
        });   
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const finalResult = [];
    dfs(nums, {}, [], finalResult);
    return finalResult;
};

