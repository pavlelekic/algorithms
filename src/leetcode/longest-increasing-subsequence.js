
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    const lcs = new Array(nums.length);
    lcs[0] = 1;
    let max = 1;
    let N = nums.length;

    for (let r = 1; r < N; r++) {
        lcs[r] = 1;
        for (let l = 0; l < r; l++) {
            if (nums[l] < nums[r]) {
                lcs[r] = Math.max(lcs[r], 1 + lcs[l]);
                max = Math.max(max, lcs[r]);
            }
        }
    }

    return max;
}
