/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 2) return nums[0] === target ? 0 : (nums[1] === target ? 1 : -1);
    let l = 0;
    let r = nums.length - 1;
    let mid;
    let midNumber;
    // debugger;
    while (l < r) {
        mid = l + Math.trunc((r  - l) / 2);
        midNumber = nums[mid];
        if (midNumber === target) return mid;

        // console.log(nums[l], midNumber, nums[r]);

        if (nums[l] > nums[r]) {
           // fucked up
            if (midNumber >= nums[l]) {
               if (target > midNumber) {
                   l = mid + 1;
               } else {
                   if (target < nums[l]) {
                      l = mid + 1;
                   } else {
                      r = mid - 1;
                   }
               }
            } else {
                if (target < midNumber) {
                    r = mid - 1;
                } else {
                    if (target >= nums[l]) {
                        r = mid - 1;
                    } else {
                        l = mid + 1;
                    }
                }
            }
        } else {
            if (target > nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
 
    }
    
    return nums[l] === target ? l : -1;
};

// export default search;
