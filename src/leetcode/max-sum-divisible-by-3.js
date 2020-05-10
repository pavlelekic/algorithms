
export default function(nums) {
    const currentMaxes = [0, 0, 0];
    let prevMaxes;

    nums.forEach(n => {
        prevMaxes = currentMaxes.slice();
        let potentialNewMax;
    
        prevMaxes.forEach(prevMax => {
            potentialNewMax = n + prevMax;
            currentMaxes[potentialNewMax % 3] = Math.max(currentMaxes[potentialNewMax % 3], potentialNewMax);
        });
    });

    return currentMaxes[0];
}
