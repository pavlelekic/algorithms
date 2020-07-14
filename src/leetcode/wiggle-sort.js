/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const numCmp = (a, b) => a - b;

var wiggleSort = function(nums) {
  nums.sort(numCmp);
  
    if (nums.length < 3) return nums;

    const numsClone = nums.slice();
    const len = nums.length;
    const half = Math.trunc(len / 2) - (len % 2 === 0 ? 1 : 0);
    let index = 0;
    let r = len -  1;
    let l = half;
  
    while (index < len) {
      if (l >= 0) {
        nums[index++] = numsClone[l--];
      }
      if (index < len && r > half) {
        nums[index++] = numsClone[r--];
      }
    }
};