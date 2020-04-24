
function isIncreasing(index, nums) {
    if (index === 0) return true;
    if (index === nums.length - 1) return false;
    
    return nums[index] >= nums[index - 1];
}

function isPeak(nums, i) {
    if (i === 1) {
        return nums[i] > nums[i+1];
    } else if (i === nums.length - 1) {
        return nums[i - 1] < nums[i];
    } else {
        return nums[i-1] < nums[i] > nums[i+1];
    }
}

function binarySearchPeakElIndex(l, r, nums) {
    let mid;
    while (l < r) {
        mid = l + Math.floor((r - l)/2);
        if (isPeak(nums, mid)) {
            return mid;
        } if (isIncreasing(mid, nums)) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    
    return l;
}

export default function findPeakElement(nums) {
    return binarySearchPeakElIndex(0, nums.length - 1, nums);
};
