
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    let middle;
    while (l < r) {
        // console.log(l, r);
        middle = l + Math.trunc((r - l) / 2);
        if (nums[middle] < nums[middle + 1]) {
            l = middle + 1;
        } else {
            r = middle;
        }
    }
    
    return l;
};
