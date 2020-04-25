
export default function solution(arr, k) {
    let sumSoFar = 0;
    let previousSums = {};
    previousSums[sumSoFar] = 1;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        sumSoFar += arr[i];
        if (previousSums[sumSoFar - k] > 0) {
            count += previousSums[sumSoFar - k];
        }
        previousSums[sumSoFar] = typeof previousSums[sumSoFar] === 'undefined' ? 1 : previousSums[sumSoFar] + 1;
    }

    return count;
}
