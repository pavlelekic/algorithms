
// export default class LongestIncreasingSequence {
//     __maxLengthStartingAt(pos, lastEl) {
//         if (pos < 0) return 0;


//         const ck = `${pos}:${lastEl}`;
//         if (typeof cache[ck] === 'undefined') {
//             if (this.__nums[pos] < lastEl) {
//                 return this.this.__maxLengthStartingAt(pos - 1, lastEl) + 1;
//             } else {
//                 return this.this.__maxLengthStartingAt(pos - 1, lastEl);
//             }
    
            
//             cache[ck] = Math.max(
//                 this.this.__maxLengthStartingAt(cache, this.__nums, pos - 1, lastEl),
//                 this.this.__maxLengthStartingAt(cache, this.__nums, pos - 1, Math.min(lastEl, this.__nums[pos])) + 1,
//             );
//         }
    
//         return cache[ck];
//     }

//     solution(nums) {
//         if (nums.length < 2) return nums.length;
//         this.__nums = nums;
//         this.__cache = {};

//         return this.this.__maxLengthStartingAt(0, Number.NEGATIVE_INFINITY);
//     }
// }


function lis(nums) {
    if (nums.length < 2) return nums.length;

    let maxLengthEndingAt = new Array(nums.length);
    maxLengthEndingAt[0] = 1;

    for (let r = 0; r < nums.length; r++) {
        maxLengthEndingAt[r] = 1;
        for (let l = 0; l < r; l++) {
            if (nums[l] < nums[r]) {
                maxLengthEndingAt[r] = Math.max(maxLengthEndingAt[l] + 1, maxLengthEndingAt[r]);
            }
        }
    }

    return Math.max(...maxLengthEndingAt);
}
