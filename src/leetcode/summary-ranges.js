
export default function(nums) {
    const result = [];
    let prev = nums[0];
    let l = nums[0];
    
    // debugger;
    nums.forEach((n, i) => {
        if (n - prev > 1) {
            if (prev !== l) {
                result.push(`${l}->${prev}`);
            } else {
                result.push(`${l}`);
            }
            l = n;
        }
        prev = n;
    });

    if (nums[nums.length - 1] !== l) {
        if (prev === l) {
            result.push(`${l}`);
        } else {
            result.push(`${l}->${prev}`);
        }
    }

    return result;
}
