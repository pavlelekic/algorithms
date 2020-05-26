
export default function solution(nums) {
    // create max suffix arr
    const suffixMax = new Array(nums.length);
    suffixMax[nums.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(nums[i], suffixMax[i + 1]);
    }

    // n^2 solution
    // for (let l = 0; l < nums.length - 2; l++) {
    //     for (let m = l + 1; m < nums.length - 1; m++) {
    //         if (nums[l] < nums[m] && nums[m] < suffixMax[m + 1]) return true;
    //     }
    // }

    // return false;

    // linear solution O(n)
    // create min prefix arr
    const prefixMin = new Array(nums.length);
    prefixMin[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prefixMin[i] = Math.min(nums[i], prefixMin[i - 1]);
    }

    const N = nums.length - 1;
    for (let i = 1; i < N; i++) {
        if (prefixMin[i - 1] < nums[i] && nums[i] < suffixMax[i + 1]) return true;
    }

    return false;
}
