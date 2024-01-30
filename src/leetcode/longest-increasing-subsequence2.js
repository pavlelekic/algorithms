/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const lis = new Array(nums.length);
  let absoluteMax = 0;

  for (let i = 0; i < nums.length; i++) {
    let max = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, lis[j] + 1);
      }
    }
    lis[i] = max;
    absoluteMax = Math.max(absoluteMax, lis[i]);
  }

  return absoluteMax;
};
