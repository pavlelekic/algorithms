
function lengthOfSequence(arr, maxSoFar, i, cache) {
    if (i >= arr.length) return 0;

    const cacheKey = `${i}-${maxSoFar}`;

    if (typeof cache[cacheKey] === 'undefined') {
        if (arr[i] < maxSoFar) {
            cache[cacheKey] =  lengthOfSequence(arr, maxSoFar, i + 1, cache); // skip element
        } else {
            cache[cacheKey] =  Math.max(
                lengthOfSequence(arr, arr[i], i + 1, cache) + 1,
                lengthOfSequence(arr, maxSoFar, i + 1, cache)
            );
        }
    }

    return cache[cacheKey];
}

export default function solution(arr) {
    if (arr.length < 2) return arr.length;

    const cache = {};
    return lengthOfSequence(arr, Number.NEGATIVE_INFINITY, 0, cache);
}
