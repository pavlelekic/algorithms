/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permutation(nums, pos, perm, usedCounts, totalCounts, results, usedPermutations) {
    if (pos === nums.length) {
        const key = perm.join(',');
        if (!usedPermutations[key]) {
            usedPermutations[key] = true;
            results.push(perm.slice());
        }
        return;
    }
    let n;
    for (let i = 0; i < nums.length; i++) {
        n = nums[i];
        // console.log({usedCounts, totalCounts});
        if (typeof usedCounts[n] === 'undefined' || totalCounts[n] > usedCounts[n]) {
            usedCounts[n] = typeof usedCounts[n] === 'undefined' ? 1 : usedCounts[n] + 1;
            perm.push(n);
            permutation(nums, pos + 1, perm, usedCounts, totalCounts, results, usedPermutations);
            perm.pop();
            usedCounts[n]--;
        }
    }
}

var permuteUnique = function(nums) {
    const totalCounts = {};
    let n;
    for (let i = 0; i < nums.length; i++) {
        n = nums[i];
        totalCounts[n] = typeof totalCounts[n] === 'undefined' ? 1 : totalCounts[n] + 1;
    }
    const results = [];
    permutation(nums, 0, [], {}, totalCounts, results, {});
    return results;
};
