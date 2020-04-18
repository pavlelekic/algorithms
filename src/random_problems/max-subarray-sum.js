
function maxSubarraySumStartingAt(cache, arr, index) {
    if (index >= arr.length) return 0;
    
    if (typeof cache[index] === 'undefined') {
        cache[index] = Math.max(
            arr[index],
            arr[index] + maxSubarraySumStartingAt(cache, arr, index + 1)
        );
    }

    return cache[index];
}

export default function solution(arr) {
    const cache = new Array(arr.length);
    maxSubarraySumStartingAt(cache, arr, 0);
    return Math.max(...cache);
}
