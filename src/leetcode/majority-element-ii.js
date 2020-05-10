
export default function(nums) {
    let candidate1;
    let candidate2;
    let count1 = 0;
    let count2 = 0;

    nums.forEach(n => {
        if (n === candidate1) {
            count1++;
        } else if (n === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = n;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = n;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    });

    count1 = 0;
    count2 = 0;
    nums.forEach(n => {
        count1 += n === candidate1 ? 1 : 0;
        count2 += n === candidate2 ? 1 : 0;
    });

    const requirement = Math.floor(nums.length / 3);
    const result = [];
    if (count1 > requirement) {
        result.push(candidate1);
    }
    if (count2 > requirement) {
        result.push(candidate2);
    }

    return result;
}
