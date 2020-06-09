
function findFirstGreater(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let mid;
    
    while (l < r) {
        mid = l + Math.trunc((r - l) / 2);
        if (nums[mid] <= target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    // console.log({l, r, target});
    return r;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1];
    if (nums.length === 1 && nums[0] === target) return [0, 0];
    
    const start = findFirstGreater(nums, target - 1);
    let end = findFirstGreater(nums, target) - 1;
    
    if (end === nums.length - 2 && target === nums[nums.length - 1]) {
        end++;
    }
    
    return nums[start] === target && nums[end] === target ? [start, end] : [-1, -1];
};