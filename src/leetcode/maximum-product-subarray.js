/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    let product;
    let bestProduct = nums[0];
    for (let l = 0; l < nums.length; l++) {
        product = 1;
        for (let r = l; r < nums.length; r++) {
            product *= nums[r];
            // console.log(l, r, product);
            bestProduct = Math.max(bestProduct, product);
        }
    }
    
    return bestProduct;
};
