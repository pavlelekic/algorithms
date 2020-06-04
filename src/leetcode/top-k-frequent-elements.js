/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const counts = {};
    let maxFrequency = Number.NEGATIVE_INFINITY;
    
    nums.forEach(n => {
        if (counts[n] === undefined) {
            counts[n] = 0;
        }
        counts[n]++;
        maxFrequency = Math.max(maxFrequency, counts[n]);
    });
    
    const buckets = new Array(maxFrequency);
    let count;
    for (let n in counts) {
        count = counts[n];
        if (buckets[count] === undefined) {
            buckets[count] = [];
        }
        buckets[count].push(n);
    }
    
    const result = [];
    let bucket, n;
    for (let currentFreq = maxFrequency; currentFreq >= 0; currentFreq--) {
        bucket = buckets[currentFreq];
        if (Array.isArray(bucket)) {
            for (let i = 0; i < bucket.length; i++) {
                n = bucket[i];
                if (result.length < k) {
                    result.push(n);
                } else {
                    break;
                }
            }
        }
    }
    
    return result;
};
